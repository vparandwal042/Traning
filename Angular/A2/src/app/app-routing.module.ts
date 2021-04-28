import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { AdvertisementTableComponent } from './advertisement-table/advertisement-table.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'advertisement-form', pathMatch: 'full' },
  { path: 'advertisement-form', component: AdvertisementFormComponentComponent,
    children: [
      {  path: 'advertisement-table', component: AdvertisementTableComponent }
    ]
  },
  { path: 'edit-advertisement/:id', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
