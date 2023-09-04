import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ValidEmail(control:AbstractControl):ValidationErrors|null{
   const emailValidation=control.value;
   //const getEmail=control.root?.get('email')?.value;
   const domain=emailValidation.substring(emailValidation.lastIndexOf('@')+1);

   if(emailValidation!="" && domain!="gmail.com"){
    return{"ValidEmail":true}

   }
   

    return null;
}