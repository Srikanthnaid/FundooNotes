import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from 'src/app/Services/userService/user.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private user: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      console.log(`this is invalid for registration!`);
      this.snackBar.open('registr Not succ!!!','',{
        duration:2000,
        verticalPosition:'top'
      })
      return;
    } else {
      console.log(`successfully registration 🙋 `);
      this.snackBar.open('registr succ!!!','',{
        duration:2000,
        verticalPosition:'top'
      })

      let reqData = {
        firstname: this.registerForm.value.firstName,
        lastname: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      this.user.Registration(reqData).subscribe((response: any) => {
        console.log(response);

      });
    }
  }
  openSnackBar(message:any) {
    
  }
}
