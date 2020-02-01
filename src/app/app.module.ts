import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaChartComponent } from './app-area-chart/area-chart.component';
import { GeoComponent } from './geo/geo.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaChartComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
