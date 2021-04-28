import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-menu-delete',
  templateUrl: './menu-delete.component.html',
  styleUrls: ['./menu-delete.component.css']
})
export class MenuDeleteComponent implements OnInit {

  public menuId: any
  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.menuId = data.id
    })
    this.adminService.deleteMenu(this.menuId).subscribe(deletedMenudata =>{
      console.log('Deleted Menu', this.menuId);
    })
  }

}
