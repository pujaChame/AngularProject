import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  employeeRegForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }
  
  ngOnInit(): void {
    //without using form builder
    // this.employeeRegForm=new FormGroup({
    //   "fullName":new FormControl('',[]),
    //   "Mobile": new FormControl('',[]),
    //   "email" : new FormControl('',[])
    // })

    //using form Builder
    this.employeeRegForm=this.fb.group({
      "fullName":['',[]],
      "Mobile":['',[]],
      "email":['',[]]

    })

  }

  save(){
    console.log("From Values",this.employeeRegForm.value);
    
  }

}
