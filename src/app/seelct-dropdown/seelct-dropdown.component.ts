import { Component } from '@angular/core';

@Component({
  selector: 'app-seelct-dropdown',
  templateUrl: './seelct-dropdown.component.html',
  styleUrls: ['./seelct-dropdown.component.css']
})
export class SeelctDropdownComponent {
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
