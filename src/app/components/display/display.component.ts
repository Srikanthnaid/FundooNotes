import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesList:any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Success",this.notesList);
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent,  {
     width: '45PX%',
     height: 'auto',
     //panelClass: 'updateDialog',
     data:note
     });
     dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed',result);
     })
  }
}
