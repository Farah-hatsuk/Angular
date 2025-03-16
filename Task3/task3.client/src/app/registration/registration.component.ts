import { Component } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private _myser: MyserviceService) { }

  ngOnIni() {

  }

  
  postDataUser(data: any) {
    this._myser.postRegistrationUser(data).subscribe(() => {

    } )

  }

}
