import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import { AboutComponent } from './about/about.component';
import { FlightListComponent } from './flight-list/flight-list.component';


@NgModule({
  declarations: [
    FlightComponent,
    AboutComponent,
    FlightListComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlightModule { }
