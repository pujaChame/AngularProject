import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  empRegistation!:FormGroup;

  constructor(private fb:FormBuilder){

  }

 ngOnInit(): void {
  this.empRegistation=this.fb.group({
   "fullName":['',[]],
   "mobile":['',[]],
   "email":['',[]],
   "gender":['',[]],
   "ismarried":['',[]],
   "Country":['',[]]
  }) 
 }

 onSubmit(){
  console.log(this.empRegistation.value)
 }
}
