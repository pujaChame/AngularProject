import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  @Input() ChildEmpObj:Employee=new Employee();
 
  @Output() sendObjToParent:EventEmitter<Employee>=new EventEmitter<Employee>();

  sendEmployeeInputs(){
    this.sendObjToParent.emit(this.ChildEmpObj);
    this.ChildEmpObj=new Employee();
  }
}
class Employee{
  empId!:number;
  empNmae!:string;
  empSalary!:number;
  empGender!:string;
  empDesignation!:string;
}
