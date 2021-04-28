import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  title = 'appBootstrap';
  showAirlines: boolean = false;
  model: any;
  constructor() { }

  ngOnInit(): void {
  }

  hideAirlines(){
    this.showAirlines = true;
  }

}
