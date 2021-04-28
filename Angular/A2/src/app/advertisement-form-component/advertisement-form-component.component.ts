import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AdvertismentServiceService } from '../advertisment-service.service';

@Component({
  selector: 'app-advertisement-form-component',
  templateUrl: './advertisement-form-component.component.html',
  styleUrls: ['./advertisement-form-component.component.css']
})
export class AdvertisementFormComponentComponent implements OnInit {

  AdvForm: any;
  submitted = false;
  advFormButton = false;
  advList: any
  advListNames: any
  searchProd: any
  constructor(private advertiseService: AdvertismentServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.AdvForm = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      name: ['Vishal', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.advertiseService.getAllAdvertises().subscribe(data =>{
      this.advList = data
      
    })

  }

  get f() { return this.AdvForm.controls; }

  onSubmit(){
    this.submitted = true
        if (this.AdvForm.invalid) {
            return;
        }

    this.advFormButton = true;
    let id = this.AdvForm.controls.id.value
    if(!id){
      this.advertiseService.addAdvertises(this.AdvForm.value).subscribe(data =>{
        console.log(data)
        alert("Data Added Successfully!!")
      })
    }
  }
}
