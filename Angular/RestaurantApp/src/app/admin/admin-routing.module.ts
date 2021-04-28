import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuResComponent } from './add-menu-res/add-menu-res.component';
import { AdminComponent } from './admin.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuByIdComponent } from './menu-by-id/menu-by-id.component';
import { MenuDeleteComponent } from './menu-delete/menu-delete.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantByIdComponent } from './restaurant-by-id/restaurant-by-id.component';
import { RestaurantDeleteComponent } from './restaurant-delete/restaurant-delete.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantViewComponent } from './restaurant-view/restaurant-view.component';

const routes: Routes = [
  { path: '', component: AdminComponent, 
    children: [
      { path: 'menu', component: MenuViewComponent,
        children: [
          { path: 'add-menu-res/:id', component: AddMenuResComponent },
          { path: 'menu-by-id/:id', component: MenuByIdComponent },
          { path: 'menu-add', component: MenuAddComponent },
          { path: 'menu-edit/:id', component: MenuEditComponent },
          { path: 'menu-delete/:id', component: MenuDeleteComponent }
        ]
      },
      { path: 'restaurant', component: RestaurantViewComponent,
        children: [
          { path: 'menu-by-id/:id', component: MenuByIdComponent },
          { path: 'restaurant-by-id/:id', component: RestaurantByIdComponent },
          { path: 'restaurant-add', component: RestaurantAddComponent },
          { path: 'restaurant-edit/:id', component: RestaurantEditComponent },
          { path: 'restaurant-delete/:id', component: RestaurantDeleteComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
