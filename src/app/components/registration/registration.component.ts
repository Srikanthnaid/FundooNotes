import { Component,  } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {
  registrationForm = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]),
    confirmPassword:new FormControl('',Validators.required)
  })
  
  submitted = false;
  onSubmit(){
    this.submitted=true;

    if(this.registrationForm.invalid){
      return;
    }
  }
}
