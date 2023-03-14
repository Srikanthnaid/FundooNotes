import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList: any;
  @Input() 
  object: any;
  noteId: any;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getTrashList();

  }
  getTrashList() {
    this.noteService.getallnotes().subscribe((res: any) => {
      console.log(res);
      this.trashList = res.data;
      this.trashList = this.trashList.filter((object: any) => {
        return object.trash == true;
      })
    })
  }
}