import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { CreateProductComponent } from './Product/create-product/create-product.component';
import { TemplateDriven1Component } from './Froms/template-driven1/template-driven1.component';
import { EmployeeComponent } from './employee/employee.component';
import { SeelctDropdownComponent } from './seelct-dropdown/seelct-dropdown.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductdropDownComponent } from './productdrop-down/productdrop-down.component';
import { EmployeeBirthDateComponent } from './Froms/employee-birth-date/employee-birth-date.component';
import { ReactiveComponent } from './Froms/reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageFormComponent } from './message-form/message-form.component';
import { ChildMessageComponent } from './child-message/child-message.component';
import { NestedFormComponent } from './Froms/nested-form/nested-form.component';
import { NestedEmployeeComponent } from './froms/nested-employee/nested-employee.component';
import { NestedReactiveComponent } from './froms/nested-reactive/nested-reactive.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    TemplateDriven1Component,
    EmployeeComponent,
    SeelctDropdownComponent,
    FormProductComponent,
    ProductdropDownComponent,
    EmployeeBirthDateComponent,
    ReactiveComponent,
    MessageFormComponent,
    ChildMessageComponent,
    NestedFormComponent,
    NestedEmployeeComponent,
    NestedReactiveComponent,
    MyFormComponent,
    CustomValidatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
