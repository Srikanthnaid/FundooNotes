import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/noteService/note.service';

NoteService
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any
  description: any
  id: any
  update=false;

  constructor(private noteService: NoteService,public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private snackBar:MatSnackBar) { 
    this.title=data.title;
    this.description=data.description;
    this.id=data._id;
  }

  ngOnInit(): void {
  }
  onClose() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteId: this.id
    }

    this.noteService.updatenote(this.id, reqData).subscribe((response: any) => {
      console.log("Update successfully ",response);
      this.dialogRef.close();
      this.update===true;
      if(this.update===true){
        this.snackBar.open(`Note update succ!!`,'',{
          duration:2000,
          verticalPosition:'bottom'
        })
      }else{
        this.snackBar.open(`Note Not-update`,'',{
          duration:2000,
          verticalPosition:'bottom'
        })
      }
    });
  }
  openSnackBar(message:any){

  }
}