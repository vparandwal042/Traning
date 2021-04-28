import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-menu-by-id',
  templateUrl: './menu-by-id.component.html',
  styleUrls: ['./menu-by-id.component.css']
})
export class MenuByIdComponent implements OnInit {

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
