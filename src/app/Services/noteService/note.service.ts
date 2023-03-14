import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  //here we need token to autherize
  token: any;
  constructor(private httpService: HttpService) {
    //get the token value form local storage
    this.token = localStorage.getItem('token')
  }
  //create note and it required data like- title,description
  createnotes(reqData: any) {
    console.log(reqData, this.token);

    //we pass the data and get the data in the form of appilcation/json
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    //call to the post httpService method
    return this.httpService.postService('/notes/create', reqData, true, header)

  }

  //get all notes
  getallnotes() {
    //here we need not require any data
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('/notes/allNote', true, header)
  }
  //updatenote
  updatenote(noteId: string, reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.putService('/notes/' + noteId, reqData, true, header)
  }
  /**
   * trash note
   */
  trashnotes(reqData: any) {
    console.log(reqData, this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.putService('/notes/' + reqData.noteId + '/Trash', {}, true, header)
  }

  archivenotes(reqData: any) {
    console.log(reqData, this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.putService('/notes/' + reqData.noteId + '/Archive', {}, true, header)
  }
}
