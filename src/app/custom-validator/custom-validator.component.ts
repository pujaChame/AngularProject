import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidEmail } from '../EmailValidator';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements  OnInit {
  employeeReg!:FormGroup;
  constructor(private fb:FormBuilder){

  }
 ngOnInit(): void {
   this.employeeReg=this.fb.group({
     "fullName":['',[]],
     "mobile":['',[]],
     "email":['',[Validators.required,ValidEmail ]]
   })

  }

  saveData(){
    console.log(this.employeeReg.value);
    console.log(this.employeeReg)
  }

  get email(){
    return this.employeeReg.get('email');
  }


}
