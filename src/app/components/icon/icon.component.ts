import { Component } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  object = {
    email:"srikanth@gmail.com",
    password : "Srikanth@123"
  }
  input='abc';
  out='abc@gmail.com';
  show() {
    console.log(this.object.email, this.object.password);
    console.log(this.input,this.out);
    
  }
  OnKeyUp(event:any){
    console.log(event);
    
  }
  OnKeyPress(event:any){
    console.log(event);
    
  }
}

