import {AfterContentInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AreaChartComponent} from './app-area-chart/area-chart.component';
import * as d3 from 'd3';
import {Point} from './geo/geo.component';

export class DeliveryMetric {
    state: string;
    stateDisplayValue: string;
    mean: number;
    stdDev: number;

    constructor(stateIn, stateDisplayValueIn, meanIn, stdDevIn) {
        this.state = stateIn;
        this.stateDisplayValue = stateDisplayValueIn;
        this.mean = meanIn;
        this.stdDev = stdDevIn;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit {
    title = 'lx-geo';

    @ViewChild('areaChart', {static: true}) chart: AreaChartComponent;

    public chartData = [];
    deliveryMetrics: DeliveryMetric[];
    refreshInterval;
    displayedColumns = ['legend', 'stateDisplayValue', 'mean', 'stdDev'];
    mockData = this.generate();

    ngOnInit() {
    }

    initialize() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
        this.generateData();
        this.chart.data = [...this.chartData];
        this.refreshInterval = setInterval(() => {
            if (document.hasFocus()) {
                this.generateData();
                this.chart.data = [...this.chartData];
            }
        }, 1000);

    }

    ngOnDestroy() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
    }

    ngAfterContentInit() {
        // this.initialize();
    }

    generateData() {
        this.chartData = [];
        this.deliveryMetrics = [];
        const meanPrepTime = randomInt(10, 11);
        const meanWaitTime = randomInt(8, 9);
        const meanTransitTime = randomInt(9, 10);

        const meanTotalTime = meanPrepTime + meanWaitTime + meanTransitTime;

        const sigmaPrepTime = randomInt(1, 1);
        const sigmaWaitTime = randomInt(2, 3);
        const sigmaTransitTime = randomInt(1, 2);

        const sigmaTotalTime = Math.floor(
            Math.sqrt(Math.pow(sigmaPrepTime, 2) +
                Math.pow(sigmaWaitTime, 2) +
                Math.pow(sigmaTransitTime, 2))
        );

        this.deliveryMetrics.push(new DeliveryMetric(
            'preparing',
            'Preparation',
            meanPrepTime,
            sigmaPrepTime
        ));
        this.deliveryMetrics.push(new DeliveryMetric(
            'ready',
            'Waiting',
            meanWaitTime,
            sigmaWaitTime
        ));
        this.deliveryMetrics.push(new DeliveryMetric(
            'inTransit',
            'In Transit',
            meanTransitTime,
            sigmaTransitTime
        ));
        this.deliveryMetrics.push(new DeliveryMetric(
            'delivered',
            'Total delivery',
            meanTotalTime,
            sigmaTotalTime
        ));

        const prandomizer = d3.randomNormal(meanPrepTime, sigmaPrepTime);
        const wrandomizer = d3.randomNormal(meanWaitTime, sigmaWaitTime);
        const trandomizer = d3.randomNormal(meanTransitTime, sigmaTransitTime);

        const ptimes = [];
        const wtimes = [];
        const ttimes = [];
        const totaltimes = [];
        for (let i = 0; i < 500; i++) {
            const p = Math.floor(prandomizer());
            const w = Math.floor(wrandomizer());
            const t = Math.floor(trandomizer());
            const total = p + w + t;
            ptimes.push(p);
            wtimes.push(w);
            ttimes.push(t);
            totaltimes.push(total);
        }
        this.chartData.push(ptimes);
        this.chartData.push(wtimes);
        this.chartData.push(ttimes);
        this.chartData.push(totaltimes);
    }

    private generate(): Point[] {

        return [
            {
                geoId: 1,
                value: 200,
                geoName: 'Карачаево-Черкессия'
            } as Point,
            {
                geoId: 2,
                value: 3000,
                geoName: 'Карелия'
            } as Point,
            {
                geoId: 3,
                value: 600,
                geoName: 'Кемерово'
            } as Point,
            ,
            {
                geoId: 4,
                value: 50,
                geoName: 'Хабаровск'
            } as Point
        ];
    }
}

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
