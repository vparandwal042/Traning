import { NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {

  public resId: any
  public resDetails: any
  public resMenuList: any
  public menuList: any
  public  displayForm: any
  public displayMenu: any
  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.resId = data.id
      console.log(this.resId)
    })
    this.adminService.viewRestaurant(this.resId).subscribe(resData =>{
      this.resDetails = resData
      console.log(this.resDetails)
    })
    this.adminService.viewMenubyId(this.resId).subscribe(menuData =>{
      this.resMenuList = menuData
      console.log(this.resMenuList)
    })
  }
  
  menuForm(){
    this.displayForm = true;
  }
  Menu(){
    this.displayMenu =true;
  }

  updateRestaurant(form: any){
    let updateRestaurant = {
      id: form.value.id,
      resName: form.value.resName,
      email: form.value.email,
      address: form.value.address,
    };
    this.adminService.updateRestaurant(this.resId, updateRestaurant).subscribe(resData =>{
      console.log(resData)
    })
  }

}
