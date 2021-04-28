import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent implements OnInit {

  public resId: any
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }
  addNewRestaurant(form: any){
    this.resId = Math.floor(Math.random() * 201);
    let newRestaurant = {
      id: this.resId,
      resName: form.value.resName,
      email: form.value.email,
      address: form.value.address,
    };

    this.adminService.addRestaurant(newRestaurant).subscribe(data =>{
      console.log(data);
    })
  }
}
