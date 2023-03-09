import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,private user : UserService,private snackBar:MatSnackBar){}

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
      this.snackBar.open('Not found!!!', '', {
        duration: 2000,
        verticalPosition: 'top'
      })
      return;
    }else{
      console.log(`successfully send reset password link to your email`);
      this.snackBar.open('found account succ!!!', '', {
        duration: 2000,
        verticalPosition: 'top'
      })
      let reqData={
        email:this.forgotpasswordForm.value.email
      }
      this.user.forgotpwd(reqData).subscribe((response:any)=>{
        console.log(response);
        
      })
    }
  }
  openSnackBar(message: any) {

  }
}
