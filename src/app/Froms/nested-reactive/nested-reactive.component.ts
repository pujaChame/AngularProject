import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-reactive',
  templateUrl: './nested-reactive.component.html',
  styleUrls: ['./nested-reactive.component.css']
})
export class NestedReactiveComponent implements  OnInit{

   employeeReg!:FormGroup;
   constructor(private fb:FormBuilder){

   }
  ngOnInit(): void {
    this.employeeReg=this.fb.group({
      "fullName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('[a-zA-Z]{2,10}')]],
      "mobile":['',[]],
      "email":['',[]],
      "address":this.fb.group({
        "line1":['',[]],
        "city":['',[]],
        "state":['',[]]
      })
    })    
  }
  

  empObj:any={
    "fullName":"puja",
    "mobile":443576,
    "email":"puja@fgh.com",
    "address":{
      "line1":"xyz society",
      "city":"pune",
      "state":"Maharashtra"
    }
  }

  patchObj:any={
    "fullName":"puja",
    "mobile":443576,
    "email":"puja@fgh.com",
  }
  
  saveData(){
   console.log(this.employeeReg.value)   
  }

  GetData(){
    this.employeeReg.setValue(this.empObj);

  }
  

  PatchData(){
    this.employeeReg.patchValue(this.patchObj)
    //this.employeeReg.patchValue(this.empObj)
  }
}
