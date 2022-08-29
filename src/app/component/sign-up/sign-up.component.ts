import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserDetail } from 'src/app/model/user-detail';
import { ApiService } from 'src/app/services/api.service';
import { CustomValidationService } from 'src/app/services/custom-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm : any;
  userDetails : UserDetail = new UserDetail();
  constructor(
    private fb: FormBuilder,
    private customValidation: CustomValidationService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    },
    {
      validator: this.customValidation.passwordValidator('firstName','lastName','password'),
    }
    );
  }

  onSubmit(){
   
    this.apiService.postSignUpDetails(this.signUpForm.value).subscribe(data =>{
      this.userDetails = data as UserDetail;   
      this.signUpSuccessful();      
    },  err =>{
       err.error.errorMessage;  
       window.alert("Something went wrong Please try again after sometime");
    });
     
  }

  signUpSuccessful(){
    window.alert("Sign up successful " );
    this.signUpForm.reset();
  }

}
