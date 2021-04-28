import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  public menuById: any
  public menuId: any 
  public resId: any
  public menuDetails: any
  public resDetails: any
  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.menuById = data.id
      console.log(this.menuById)
    })
    this.adminService.viewMenu(this.menuById).subscribe(menuData =>{
      this.menuDetails = menuData
      console.log(menuData)

      let key = Object.keys(this.menuDetails)
      let n = key.length
      let last_key = key[n-1]
      this.resId = this.menuDetails[last_key]
      
      this.adminService.viewRestaurant(this.resId).subscribe(resData =>{
        this.resDetails = resData
        console.log(resData) 
      })
    })
  }

  updateRestaurantMenu(form: any){
    let oId = Math.floor(Math.random() * 201);
    let newOrder   = {
      id: oId,
      foodName: form.value.foodName,
      qty: form.value.qty,
      sizes: form.value.sizes,
      resId: form.value.resId,
      resName: form.value.resName,
      email: form.value.email,
      address: form.value.address,
    };
    this.adminService.addOrder(newOrder).subscribe(data =>{
      alert('Order Placed Successfully!!!');
    })
  }

}
