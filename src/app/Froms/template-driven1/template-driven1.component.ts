import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven1',
  templateUrl: './template-driven1.component.html',
  styleUrls: ['./template-driven1.component.css']
})
export class TemplateDriven1Component {
  SaveData(form:NgForm){
    console.log(form)
    console.log(form.value);
    console.log(form.dirty);
    console.log(form.pristine)

  }

}
