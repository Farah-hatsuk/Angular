import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private _myser: MyServiceService) { }

  ngOnIni() {

  }


  postDataUser(data: any) {
    this._myser.postRegistrationUser(data).subscribe(() => {

    })

   

  }

}
