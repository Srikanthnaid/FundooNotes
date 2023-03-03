import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  Registration(reqData: any) {
    console.log(reqData);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService("/users/register", reqData, false, header)
  }

  //login
  login(reqData: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        
      })
    }
    return this.httpService.postService('/users/login', reqData, false, header);
  }

  forgotpwd(reqData: any) {
    console.log(reqData);
    

    let header = {
      header: new HttpHeaders({
        'Content-type': 'application/json',
        
      })
    }

    return this.httpService.postService("/users/forgotpwd",reqData,false,header);
  }
}
