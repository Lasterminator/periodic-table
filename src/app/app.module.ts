import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LegendComponent } from './legend/legend.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { ThermostatComponent } from './thermostat/thermostat.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ModalComponent } from './modal/modal.component';
import { ElementGridComponent } from './element-grid/element-grid.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DatatableToggleComponent } from './datatable-toggle/datatable-toggle.component';
import { ContentComponent } from './content/content.component';
import { ChemicalElementComponent } from './chemical-element/chemical-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LegendComponent,
    NavBarComponent,
    PeriodicTableComponent,
    ThermostatComponent,
    TooltipComponent,
    ModalComponent,
    ElementGridComponent,
    DatatableComponent,
    DatatableToggleComponent,
    ContentComponent,
    ChemicalElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
