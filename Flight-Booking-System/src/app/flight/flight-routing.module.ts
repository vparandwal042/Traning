import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightComponent } from './flight.component';

const routes: Routes = [
  { path: '', component: FlightComponent} ,
  { path: 'flight-list', component: FlightListComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
