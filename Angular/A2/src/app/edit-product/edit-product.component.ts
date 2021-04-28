import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertismentServiceService } from '../advertisment-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  AdvForm: any;     
  prodId: any
  advList: any
  constructor(
    private activateRoute: ActivatedRoute, 
    private advertiseService: AdvertismentServiceService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.prodId = data.id
    })
    this.AdvForm = this.fb.group({
      id: [this.prodId],
      title: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.advertiseService.getAdvertise(this.prodId).subscribe(advData =>{
      this.advList = advData
      let keys = Object.keys(this.advList)
      for(let key in keys){
        this.AdvForm.patchValue(this.advList[key])
      }
    })
  }

  get AdvFormControl(){
    return this.AdvForm.controls
  }

  update(){
    this.advertiseService.updateAdvertise(this.prodId, this.AdvForm.value).subscribe(data =>{
      alert("Updated Data Successfully!!")
      this.router.navigate(['advertisement-form/advertisement-table/'])
    })
  }
}
