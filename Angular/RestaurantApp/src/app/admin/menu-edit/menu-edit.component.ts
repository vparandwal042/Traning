import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  public menuId: any
  public menuDetails: any
 constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.menuId = data.id
      console.log(this.menuId)
    })
    this.adminService.viewMenu(this.menuId).subscribe(menuData =>{
      this.menuDetails = menuData
      console.log(this.menuDetails)
    })
  }

  updateNewMenu(mform: any){
    let updateMenu = {
      id: mform.value.id,
      foodName: mform.value.foodName,
      qty: mform.value.qty,
      sizes: mform.value.sizes,
      resId: mform.value.resId
    };
    this.adminService.updateMenu(this.menuId, updateMenu).subscribe(menuData =>{
      console.log(menuData)
    })
  }
}
