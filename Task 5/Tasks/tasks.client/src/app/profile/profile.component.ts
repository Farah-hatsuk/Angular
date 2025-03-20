import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private _myser: MyServiceService) { }

  user: any = { username: '', password: '' };
  isEditModalVisible: boolean = false;


  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userInfo = JSON.parse(loggedInUser);
      this.user = userInfo;
    } 
  }

  editProfile() {
    this.isEditModalVisible = true;
  }




  // catch the  data from child (edit profile)
  onUserUpdated(updatedUser: any) {
    if (updatedUser) {
      this.user.name = updatedUser.name
      this.user.password = updatedUser.password
      this._myser.updateUserLogin(this.user.id, this.user).subscribe(() => {
      })
    }
    this.isEditModalVisible = false;
  }
}


