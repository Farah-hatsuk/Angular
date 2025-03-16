import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  postRegistrationUser(data: any) {
    return this._http.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users",data)
  }

  getUserLogin() {
    return this._http.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }



}
