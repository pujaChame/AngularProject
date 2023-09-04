import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-employee',
  templateUrl: './nested-employee.component.html',
  styleUrls: ['./nested-employee.component.css']
})
export class NestedEmployeeComponent implements OnInit {

  employeeRegistration!:FormGroup;
  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.employeeRegistration=this.fb.group({
      "fullName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('[a-zA-Z]{2,10}')]],
      "mobile":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10,10}')]],
      "email":['',[]],
      "address":this.fb.group({
        "line1":['',[]],
        "city":['',[]],
        "state":['',[]]
      })
    })
  }
  
  savedata(){
    console.log(this.employeeRegistration.value)

  }

  getDataObj:any={
    "fullName":"Mayank",
    "mobile":476434374,
    "email":"mayu@gmail.com",
    "address":{
      "line1":"ShukhShanti Society",
      "city":"Pune",
      "state":"Maharashtra"
    }
  }

  patchDataObj:any={
    "fullName":"Kamini",
    "mobile":69694555,
    "email":"kamini@gmail.com"
  }
  
  getData(){
     this.employeeRegistration.setValue(this.getDataObj);
  }
   
  patchData(){
     //this.employeeRegistration.patchValue(this.patchDataObj);
     this.employeeRegistration.patchValue(this.getDataObj)
  }



}
