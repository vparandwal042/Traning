import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-menu-res',
  templateUrl: './add-menu-res.component.html',
  styleUrls: ['./add-menu-res.component.css']
})
export class AddMenuResComponent implements OnInit {

  public resList: any
  public menuList: any
  public menuId: any
  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.menuId = data.id
    })
    this.adminService.getAllRestaurants().subscribe(resData =>{
      this.resList = resData;
    })
  }
  addMenuRes(List: any){
    this.adminService.viewMenu(this.menuId).subscribe(menuData =>{
      this.menuList = menuData
      console.log(List, this.menuId, this.menuList)
      
      let keys = Object.keys(List)
      let resId = "resId"
      this.menuList[resId] = List[keys[0]]
      console.log("After = ", this.menuList)
      this.adminService.updateMenu(this.menuId, this.menuList).subscribe(data=>{
        alert("Menu Added Sucessfully to Restaurant!!")
      })
    })
  }
}
