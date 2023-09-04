import { Component } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  messageFromParent:string="";
  receveData:string="";
  RecieveData(data:any){
  this.receveData=data;
 console.log(this.receveData);
  }

}
