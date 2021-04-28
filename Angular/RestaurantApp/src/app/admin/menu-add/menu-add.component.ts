import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

  public menuId: any
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }
  addNewMenu(form: any){
    this.menuId = Math.floor(Math.random() * 201);
    let newMenu = {
      id: this.menuId,
      foodName: form.value.foodName,
      qty: form.value.qty,
      sizes: form.value.sizes,
    };

    this.adminService.addMenu(newMenu).subscribe(data =>{
      console.log(data);
    })
  }

}
