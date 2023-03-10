import { Component, Input, OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements  OnInit {
  @Input() 
  noteObject:any;
  


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    let reqData={
      noteId:this.noteObject.noteId,
    }
    console.log(reqData)
    
  }

  
}