import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AreaChartComponent} from './app-area-chart/area-chart.component';
import {GeoComponent} from './geo/geo.component';
import {Geo2Component} from './geo2/geo2.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        AreaChartComponent,
        GeoComponent,
        Geo2Component
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
