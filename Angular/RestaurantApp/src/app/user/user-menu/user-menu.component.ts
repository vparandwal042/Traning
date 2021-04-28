import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public menuById: any
  public menuList: any
  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.menuById = data.id
      console.log(this.menuById)
    })
    this.adminService.viewMenubyId(this.menuById).subscribe(menuData =>{
      this.menuList = menuData;
      console.log(this.menuList)
    })
  }

}
