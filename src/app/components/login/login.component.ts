import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,private user:UserService){}


  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.min(6)]]
      });
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      console.log(`not valid!!`);
      
      return;
    }else{
      console.log(`login successfully!! 😻 `);
      let reqData={
        email:this.loginForm.value.username,
        password:this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((response:any)=>{
        console.log(response);
        
        
      })
      
    }
  }
}
