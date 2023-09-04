import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  productObj:Product= new Product();

 // this.productObj.TotalPrice=this.productObj.price*this.productObj.quantity;

 TotalPrice(){
   this.productObj.TotalPrice=this.productObj.price*this.productObj.quantity;
   //return this.productObj.TotalPrice;

}
readonly total:number=this.productObj.TotalPrice;
  saveProduct(form:NgForm){
    //this.TotalPrice();

  }
  resetData(){
    this.productObj=new Product();

  }
   productData:Product={
    category:"Electronics",
    productName:"Mobile",
    price:20000,
    quantity:4,
    TotalPrice:80000
    
   }

  getData(){

   this.productObj={...this.productData}
    }

    productName:string="";
  indivialProduct:string[] = [] ;

  category:any = {
    "Electronics":["Television","Radio","Laptop","Mobile","Headphone","Clock"],
    "Home Appliance":["Refrigerator","Washing Machine","Air Conditioner","Microwave","Storage Geyser","Induction","Iron","Table"],
    "Tool Kits":["Voltage Tester","Air Gun","Vaccum Cleaner","Measurement Tape","Screwdriver","Soldering Machine","Drill Machine"]
 }


getProductNames(){
  this.indivialProduct =  this.category[this.productName];

}

  }
 

class Product{
  category!:string;
  productName!:string;
  price!:number;
  quantity!:number;
  TotalPrice:any;
}
