import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _myser: MyServiceService, private _route: Router) { }

  userData: any
  getDataUser(logedUser: any) {
    this._myser.getUserLogin().subscribe((data: any) => {
      let userData = data.find((x: any) => x.Email == logedUser.Email && x.password == logedUser.password);

      if (userData) {
        alert("Loging Successfully")
        this._route.navigate(["/category"])
      } else {
        alert("invalid email or passwoerd")
      }
    })
  }
}
