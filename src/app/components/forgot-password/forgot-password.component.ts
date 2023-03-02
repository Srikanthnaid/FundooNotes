import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
      this.forgotpasswordForm = this.formBuilder.group({
        emailId:['',[Validators.required,Validators.email]]
      });
  }
  onSubmit(){
    this.submitted = true;

    if(this.forgotpasswordForm.invalid){
      return;
    }
  }
}
