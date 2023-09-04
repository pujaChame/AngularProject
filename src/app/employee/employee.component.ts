import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empObj:Employee=new Employee();
  employeeList:Employee[]=[
    {empId:1,empNmae:"Puja",empSalary:50000,empDesignation:"Angular Developer"},
    {empId:2,empNmae:"Prashant",empSalary:70000,empDesignation:"Engineer"},
    {empId:3,empNmae:"Payal",empSalary:50000,empDesignation:"HR"},
    {empId:4,empNmae:"Punam",empSalary:35000,empDesignation:"HR"},
    {empId:5,empNmae:"Pravin",empSalary:40000,empDesignation:"Angular Developer"}
 ]

}
class Employee{
  empId!:number;
  empNmae!:string;
  empSalary!:number;
  empDesignation!:string;
}
