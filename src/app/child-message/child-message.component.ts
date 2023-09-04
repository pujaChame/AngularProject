import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-message',
  templateUrl: './child-message.component.html',
  styleUrls: ['./child-message.component.css']
})
export class ChildMessageComponent {
@Input() MeassageFromParent:string="";
ChildToParent:string="";

@Output() SendMessage:EventEmitter<string>=new EventEmitter<string>();

SendDataToParent(){
  this.SendMessage.emit(this.ChildToParent);
}


}
