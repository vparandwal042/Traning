import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../admin/Restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/restaurants/";
    return this.httpClient.get<Restaurant>(resUrl);
  }
  getAllMenu(): Observable<Restaurant>{
    const menuUrl = "http://localhost:3000/menu/";
    return this.httpClient.get<Restaurant>(menuUrl);
  }

  viewMenubyId(Id: any): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/menu/?resId=" + Id;
    return this.httpClient.get<Restaurant>(resUrl);  
  }

  addRestaurant(resBody: any): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/restaurants/";
    return this.httpClient.post<Restaurant>(resUrl, resBody);
  }
  addMenu(menuBody: any): Observable<Restaurant>{
    const menuUrl = "http://localhost:3000/menu/";
    return this.httpClient.post<Restaurant>(menuUrl, menuBody);
  }
  addOrder(orderBody: any): Observable<Restaurant>{
    const orderUrl = "http://localhost:3000/place-order/";
    return this.httpClient.post<Restaurant>(orderUrl, orderBody);
  }

  viewRestaurant(id :any): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/restaurants/" + id;
    return this.httpClient.get<Restaurant>(resUrl);
  }
  viewMenu(Id: any): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/menu/" + Id;
    return this.httpClient.get<Restaurant>(resUrl);  
  }

  updateRestaurant(id: any, resBody: any): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/restaurants/" + id;
    return this.httpClient.put<Restaurant>(resUrl, resBody);
  }
  updateMenu(id: any, menuBody: any): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/menu/" + id;
    return this.httpClient.put<Restaurant>(resUrl, menuBody);
  }

  deleteRestaurant(id: any): Observable<Restaurant>{
    const resUrl = "http://localhost:3000/restaurants/" + id;
    return this.httpClient.delete<Restaurant>(resUrl);
  }
  deleteMenu(id: any): Observable<Restaurant>{
    const menuUrl = "http://localhost:3000/menu/" + id;
    return this.httpClient.delete<Restaurant>(menuUrl);
  }
}
