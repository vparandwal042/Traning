import { Component, OnInit } from '@angular/core';
import { AdvertismentServiceService } from '../advertisment-service.service';

@Component({
  selector: 'app-advertisement-table',
  templateUrl: './advertisement-table.component.html',
  styleUrls: ['./advertisement-table.component.css']
})
export class AdvertisementTableComponent implements OnInit {

  advList: any
  public query: any = ""
  constructor(private advertiseService: AdvertismentServiceService) { }

  ngOnInit(): void {
    this.advertiseService.getAllAdvertises().subscribe(data =>{
      this.advList = data
    })
  }

  delete(id: any){
    var del = confirm("Want to Delete?");
    if(del){
      this.advertiseService.deleteAdvertise(id).subscribe(data =>{
        alert("Data Deleted Successfully!!");
      })
    }
  }
}
