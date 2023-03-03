import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,private user : UserService){}

  ngOnInit(): void {
      this.forgotpasswordForm = this.formBuilder.group({
        email:['',[Validators.required,Validators.email]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotpasswordForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.forgotpasswordForm.invalid){
      console.log(`not valid`);
      
      return;
    }else{
      console.log(`successfully send reset password link to your email`);
      
      let reqData={
        email:this.forgotpasswordForm.value.email
      }
      this.user.forgotpwd(reqData).subscribe((response:any)=>{
        console.log(response);
        
      })
    }
  }
}
