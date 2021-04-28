import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuDeleteComponent } from './menu-delete/menu-delete.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantDeleteComponent } from './restaurant-delete/restaurant-delete.component';
import { RestaurantViewComponent } from './restaurant-view/restaurant-view.component';
import { MenuByIdComponent } from './menu-by-id/menu-by-id.component';
import { RestaurantByIdComponent } from './restaurant-by-id/restaurant-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMenuResComponent } from './add-menu-res/add-menu-res.component';


@NgModule({
  declarations: [
    AdminComponent,
    MenuAddComponent,
    MenuEditComponent,
    MenuDeleteComponent,
    MenuViewComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    RestaurantDeleteComponent,
    RestaurantViewComponent,
    MenuByIdComponent,
    RestaurantByIdComponent,
    AddMenuResComponent,
  ],
  exports:[
    AdminComponent,
    MenuAddComponent,
    MenuEditComponent,
    MenuDeleteComponent,
    MenuViewComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    RestaurantDeleteComponent,
    RestaurantViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
