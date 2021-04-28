import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-restaurant-delete',
  templateUrl: './restaurant-delete.component.html',
  styleUrls: ['./restaurant-delete.component.css']
})
export class RestaurantDeleteComponent implements OnInit {

  public resId: any
  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.resId = data.id
    })
    this.adminService.deleteRestaurant(this.resId).subscribe(deletedresdata =>{
      console.log('Deleted res', this.resId);
    })
  }

}
