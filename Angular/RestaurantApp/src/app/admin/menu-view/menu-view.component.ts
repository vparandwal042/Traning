import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {

  public menuList: any
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllMenu().subscribe(menuData =>{
      this.menuList = menuData;
    })
  }

}
