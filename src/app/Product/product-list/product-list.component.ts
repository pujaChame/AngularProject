import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  isUpdate:boolean=false;
  empObj:Employee=new Employee();

  employeeList:Employee[]=[
     {empId:1,empNmae:"Puja",empSalary:50000,empGender:"Female",empDesignation:"Angular Developer"},
     {empId:2,empNmae:"Prashant",empSalary:70000,empGender:"Male",empDesignation:"Engineer"},
     {empId:3,empNmae:"Payal",empSalary:50000,empGender:"Female",empDesignation:"HR"},
     {empId:4,empNmae:"Punam",empSalary:35000,empGender:"Female",empDesignation:"HR"},
     {empId:5,empNmae:"Pravin",empSalary:40000,empGender:"Male",empDesignation:"Angular Developer"}
  ]


  receiveEmpInputFromChild(data:any){
    this.employeeList.push(data);
  }

  editEmpData(index:number){
    this.empObj={...this.employeeList[index]}
  }

  deleteEmpData(index:number){
   this.employeeList.slice(index,1);
  }

}
class Employee{
  empId!:number;
  empNmae!:string;
  empSalary!:number;
  empGender!:string;
  empDesignation!:string;
}
