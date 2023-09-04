import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  registrationForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
   this.registrationForm= this.fb.group({
    "fullName":['',[]],
    "Mobile":['',[]],
     "email":['',[]],
     "address":this.fb.group({
      "line1":['',[]],
      "city":['',[]],
      "State":['',[]]
     })
   })  
   }
   getDataObj:any={
     "fullName":"puja",
     "Mobile":9096300335,
     "email":"prsahant@gmail.com",
     "address":{
       "line1":"Tapkir Nagar",
       "city":"pune",
       "State":"Maharashtra"
     }
   }

   patchObj:any={
    "fullName":"Manita",
    "Mobile":945654347
   }
  

  SaveData(){
    console.log(this.registrationForm.value);
  }
  
  GetData(){
    this.registrationForm.setValue(this.getDataObj)
  }

  PatchData(){
    this.registrationForm.patchValue(this.patchObj)

  }
}
