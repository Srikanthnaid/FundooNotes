import { Component, Input, OnInit} from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements  OnInit {
  @Input() noteObject:any;
  noteId : any;


  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
  }

  onDelete(){
    let reqData={
      noteId:this.noteObject._id,
    }
    console.log(this.noteObject)
    this.noteService.trashnotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
    })
  }

  onArchive(){
    let reqData={
      noteId:this.noteObject._id,
    }
    console.log(this.noteObject);
    this.noteService.archivenotes(reqData).subscribe((response: any) =>{
      console.log("Note Archived Successfully", response);
    })
  }

   
}