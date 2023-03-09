import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  constructor() { }
  @Input() 
  notesList:any;
  ngOnInit(): void {
  }

}
