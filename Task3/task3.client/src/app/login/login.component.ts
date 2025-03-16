import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _myser: MyserviceService, private _route: Router) { }

  userData: any
  getDataUser(logedUser: any) {
    this._myser.getUserLogin().subscribe((data: any) => {
      let userData = data.find((x: any) => x.Email == logedUser.Email && x.password == logedUser.password);

      if (userData) {
        alert("login by hani effect")
        this._route.navigate(["/Registration"])
      } else {
        alert("invalid email or passwoerd")
      }
    })
  }
 

}
