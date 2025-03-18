import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private _myser: MyserviceService, private _route: Router) { }

  ngOnIni() {

  }

  
  postDataUser(data: any) {
    let registration = this._myser.postRegistrationUser(data).subscribe(() => {
      if (registration) {
        this._route.navigate(["/Login"])
      }
    } )

  }

}
