import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson-client';
import * as geoJson from 'GeoJSON';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';
import {TopoJsonService} from './topojson.service';

export interface GeoItem {
    data: any;
    iso2: string;
    fill: any;
    value: number;
    extra: any;
}

@Component({
    selector: 'app-geo2',
    templateUrl: './geo2.component.html',
    styleUrls: ['./geo2.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Geo2Component implements OnInit, AfterViewInit {
    public width: number = 960;
    public height: number = 500;

    private _color: any;
    private _mapPath: d3.GeoPath;
    private _projection: d3.GeoConicProjection;

    private _series$: Subject<ChartPointSeries[]> = new Subject();
    public items$: Observable<GeoItem>;

    constructor(private _topoJsonService: TopoJsonService) {
    }

    @Input()
    public set series(series: ChartPointSeries[]) {
        this._series$.next(series);
    }

    ngAfterViewInit(): void {
        this.applyZoom();
    }

    ngOnInit() {
        this.setUpMapPath(this.width, this.height);
        this.items$ = combineLatest(
            this._series$,
            this._topoJsonService.russia$)
            .pipe(
                map(([series, topoJson]) => {
                    this.setUpColor(series.map(s => s.extra.value));

                    // @ts-ignore
                    const features = t.feature(topoJson, topoJson.objects.name).features;
                    const chartPointSeriesByIso2: { [id: string]: ChartPointSeries } = {};
                    series.forEach(d => {
                        const extra = <GeoChartPointSeriesExtra> d.extra;
                        chartPointSeriesByIso2[d.extra.iso2] = d;
                    });

                    const items = features.map((feature: geoJson.Feature) => {

                        const chartPointSeries = chartPointSeriesByIso2[feature.properties.ISO_2];
                        if (isNullOrUndefined(chartPointSeries)) {
                            return <GeoItem> {
                                data: this._mapPath(feature),
                                fill: this._color(0),
                                iso2: feature.properties.ISO_2,
                                value: 0,
                            };
                        }

                        const extra = <GeoChartPointSeriesExtra> chartPointSeries.extra;
                        const fill = this._color(extra.value);

                        const item = <GeoItem> {
                            data: this._mapPath(feature),
                            fill: fill,
                            iso2: feature.properties.ISO_2,
                            value: extra.value,
                            extra: extra
                        };

                        return item;
                    });

                    return items;
                }));
    }

    public trackBy(index, item: GeoItem) {
        return item.iso2;
    }

    private setUpColor(values: number[]) {
        const fullBlue: Readonly<string[]> = ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0288D1', '#01579B'];

        const gradientBlue = ['#C5CFD4', '#2163FF'];
        const gradientBlue2 = ['#FFFFFF', '#01579B'];
        const gradientBlueRed = ['#447AD0', '#FF0000'];

        // this._color = d3.scalePow()
        //     .exponent(3)
        //     .domain(d3.extent(values))
        //     // @ts-ignore
        //     .range(gradientBlue2);

        this._color = d3.scaleLinear()
            .domain(d3.extent(values))
            // @ts-ignore
            .range(gradientBlue);

        // this._color = d3.scaleQuantize()
        //     .domain(d3.extent(values))
        //     // @ts-ignore
        //     .range(fullBlue);
    }

    private applyZoom() {
        const svg = d3.select('svg');
        const g = svg.select('g');

        const zoomed = () => {
            const {transform} = d3.event;
            g.attr('transform', transform);
            // g.attr('stroke-width', 1 / transform.k);
        };

        const zoom = d3.zoom()
            .scaleExtent([1, 5])
            .on('zoom', zoomed);
        svg.call(zoom);
    }

    private setUpMapPath(width: number, height: number) {
        this._projection = d3.geoAlbers()
            .rotate([-105, 0])
            .center([-10, 65])
            .parallels([52, 64])
            .scale(700)
            .translate([width / 2, height / 2]);

        this._mapPath = d3.geoPath().projection(this._projection);
    }
}

export interface ChartPoint {
    readonly name: string;
    readonly value: number;
    readonly extra: any;
}

/**
 * Серия точек по одному объекту
 */
export interface ChartPointSeries {
    readonly name: string;
    /**
     * Суммарное значение элементов отформатированное для вывода в текст (например для тональности не сумма, а значение всего упоминаний)
     */
    readonly totalText: string;
    readonly series: ChartPoint[];
    readonly extra: any;
}

export interface GeoChartPointSeriesExtra {
    value: number;
    iso2: string;
}
