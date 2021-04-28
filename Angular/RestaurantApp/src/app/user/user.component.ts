import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public resList: any
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllRestaurants().subscribe(resData =>{
      this.resList = resData;
    })
  }

}
