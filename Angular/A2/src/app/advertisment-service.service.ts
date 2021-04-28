import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllAdvertises(){
    const url = "http://localhost:3000/advertisment/";
    return this.httpClient.get(url);
  }

  addAdvertises(form :any){
    const url = "http://localhost:3000/advertisment/";
    return this.httpClient.post(url, form);
  }

  getAdvertise(id: any){
    const url = "http://localhost:3000/advertisment?id=" + id;
    return this.httpClient.get(url);
  }

  updateAdvertise(id: any, form: any){
    const url = "http://localhost:3000/advertisment/" + id;
    return this.httpClient.put(url, form);
  }

  deleteAdvertise(id: any){
    const url = "http://localhost:3000/advertisment/" + id;
    return this.httpClient.delete(url);
  }
}
