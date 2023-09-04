import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-birth-date',
  templateUrl: './employee-birth-date.component.html',
  styleUrls: ['./employee-birth-date.component.css']
})
export class EmployeeBirthDateComponent {
  empObj:Employee=new Employee();
  saveEmpDatails(form:NgForm){

  }

  getData(){}
  resetData(){
    this.empObj=new Employee();
  }

}
class Employee{
  Name!:string;
  MobileNo!:number;
  Email!:string;
  Dob!:Date;
}
