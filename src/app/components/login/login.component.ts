import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private user: UserService, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log(`not valid!!`);
      this.snackBar.open(' Not login!!!', '', {
        duration: 2000,
        verticalPosition: 'top'
      })
      return;
    } else {
      console.log(`login success!! 😻 `);
      this.snackBar.open('login succ!!!', '', {
        duration: 2000,
        verticalPosition: 'top'
      })
      let reqData = {
        email: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('token',res.data)
      })

    }
  }
  openSnackBar(message: any) {

  }


}
