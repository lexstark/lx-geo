import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson-client';
import {russiaMap, TopoGeometry} from './russia.map';

/**
 * http://bl.ocks.org/KoGor/5685876
 */
@Component({
    selector: 'app-geo',
    templateUrl: './geo.component.html',
    styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {

    @Input()
    public geoPoints: Point[];

    constructor() {
    }

    ngOnInit() {
        this.updateChart();
    }

    /**
     * todo: переписать на https://github.com/lsharir/angular-d3-graph-example/blob/master/src/app/d3/d3.service.ts
     */
    public async updateChart() {
        const width = 960;
        const height = 500;
        const colorDomain = [100, 500, 1000, 5000];
        const extColorDomain = [0, 50, 150, 350, 750, 1500];
        const legendLabels = ['< 50', '50+', '150+', '350+', '750+', '> 1500'];

        const color = d3.scaleThreshold<number, string>()
            .domain(colorDomain)
            .range(['#eff0f2', '#d8dde7', '#bcc5d6', '#909ebb']);

        const div = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);

        const svg = d3.select('body').append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('margin', '10px auto');

        const projection = d3.geoAlbers()
            .rotate([-105, 0])
            .center([-10, 65])
            .parallels([52, 64])
            .scale(700)
            .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        // Reading map file and data

        // const map = await d3.json('/assets/russia_1e-7sr.json');
        // const russia = map.objects.russia;

        // https://github.com/zarkzork/russia-topojson
        const map = await d3.json('/assets/russia2.json');
        const russia = map.objects.name;
        const valueById = {};
        const nameById = {};

        const data = this.geoPoints;
        data.forEach(d => {
            const geoMap = russiaMap.find(m => m.geoId === d.geoId);
            valueById[geoMap.isoKey] = +d.value;
            nameById[geoMap.isoKey] = d.geoName;
        });

        // Drawing Choropleth

        const region = svg.append('g')
            .attr('class', 'region')
            .selectAll('path')
            .data(t.feature(map, russia).features)
            .enter().append('path')
            .attr('d', path)
            .style('fill', (d: TopoGeometry) => {
                const threshold = valueById[d.properties.ISO_2];
                const c = color(threshold || 0);
                return c;
            })
            .style('opacity', 0.8);

        region.on('mouseover', (d: TopoGeometry, i, nodes) => {
            const select = d3.select(nodes[i]);
            select.transition().duration(300).style('fill', '#0065dd');

            div.transition().duration(300)
                .style('opacity', 1);

            const tooltip = nameById[d.properties.ISO_2] && valueById[d.properties.ISO_2]
                ? `${valueById[d.properties.ISO_2]} упоминаний в ${nameById[d.properties.ISO_2]}`
                : `Нет упоминаний`;

            div.text(tooltip)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY - 30) + 'px');
        });

        region.on('mouseout', (d: TopoGeometry, i, nodes) => {
            const threshold = valueById[d.properties.ISO_2];
            const c = color(threshold || 0);

            d3.select(nodes[i])
                .transition().duration(300)
                .style('fill', c);
            div.transition().duration(300)
                .style('opacity', 0);
        });

        // Adding mouseevents

        // Adding cities on the map

        // const cities = await d3.tsv('/assets/cities.tsv');
        // const city = svg.selectAll('g.city')
        //     .data(cities)
        //     .enter()
        //     .append('g')
        //     .attr('class', 'city')
        //     .attr('transform', (d: any) => {
        //         return 'translate(' + projection([d.lon, d.lat]) + ')';
        //     });
        //
        // city.append('circle')
        //     .attr('r', 3)
        //     .style('fill', 'lime')
        //     .style('opacity', 0.75);
        //
        // city.append('text')
        //     .attr('x', 5)
        //     .text(d => d.City);


        const zoomed = () => {
            const transform = d3.event.transform;
            svg.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
        }

        const zoom = d3.zoom().on('zoom', zoomed);
        svg.call(zoom);
    }


}

export interface Point {
    geoId: number;
    geoName: string;
    value: number;
}
