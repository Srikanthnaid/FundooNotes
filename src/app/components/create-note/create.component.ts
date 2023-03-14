import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;
  display: boolean = true;
  submitted = false;
  token: any;
  title: string = '';
  description: string = '';
  message: any;


  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private note: NoteService, private activeRoute: ActivatedRoute) { }



  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.token= localStorage.getItem('value')
  }

  onSubmit() {
    this.submitted = true;
    if (this.createForm.valid) {
      console.log(`new note created`);
      this.snackBar.open('new note create succ!!!', '', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
      let reqData = {
        title: this.createForm.value.title,
        description: this.createForm.value.description
      }
      console.log(reqData);
      this.note.createnotes(reqData).subscribe((res) => {
        console.log(res);

      })

    } else {
      this.submitted = false;
      console.log(`values are null please enter a values`);
      this.snackBar.open('new note create succ!!!', '', {
        duration: 2000,
        verticalPosition: 'top'
      })
    }
    this.display = true;
  }
  openSnackBar(message: any) {

  }

}
