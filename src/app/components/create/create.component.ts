import { Component, OnInit } from '@angular/core';
import {  FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;
  display: boolean = true;
  submitted = false;
  

  constructor(){}


  ngOnInit(): void {
      
  }

  onSubmit(){
    
  }

}
