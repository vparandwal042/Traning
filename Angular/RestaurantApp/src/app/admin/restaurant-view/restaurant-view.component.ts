import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent implements OnInit {

  public resList: any
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllRestaurants().subscribe(resData =>{
      this.resList = resData;
    })
  }

}
