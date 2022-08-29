import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  passwordValidator(firstName: string, lastName: string, password: string) {
   
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const firstNameControl = formGroup.controls[firstName];
      const lastNameControl = formGroup.controls[lastName];
   
      if ( !firstNameControl|| !lastNameControl) {
        return null;
      }
    
     if ( (firstNameControl.value.length != 0) && (lastNameControl.value.length != 0)) {
        if (passwordControl.value.includes(firstNameControl.value) || passwordControl.value.includes(lastNameControl.value) ) {
          return passwordControl.setErrors({ containsName: true });
      }
    }
      if(passwordControl.value.length != 0 ){
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$');
      const valid = regex.test(passwordControl.value);
      return valid ? passwordControl.setErrors({ invalidPassword: false }) : 
              passwordControl.setErrors({ invalidPassword: true });
      }
    };
  }

  
}
