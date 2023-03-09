import { Component,OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit{
   notesList:any;

  constructor(private notes:NoteService){}

  ngOnInit():void{
    this.onSubmit()
  }

  onSubmit(){
    this.notes.getallnotes().subscribe((res:any)=>{
      console.log(res);
      this.notesList=res.data;
      console.log(this.notesList);
      
    })
  }
}
