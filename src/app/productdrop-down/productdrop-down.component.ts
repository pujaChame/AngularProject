import { Component } from '@angular/core';

@Component({
  selector: 'app-productdrop-down',
  templateUrl: './productdrop-down.component.html',
  styleUrls: ['./productdrop-down.component.css']
})
export class ProductdropDownComponent {
  stateName:string="";
  cityNames:string[] = [] ;
   
   constructor(){
  
    }
  
    states:any = {
      "Maharashtra":["Mumbai","Pune","Nashik"],
      "Rajasthan":["Jaipur","Jodhpur"],
      "Madhyapradesh":["Indore","Bhopal"]
   }
  
  
  getCityNames(){
    this.cityNames =  this.states[this.stateName];
  }
  

}
