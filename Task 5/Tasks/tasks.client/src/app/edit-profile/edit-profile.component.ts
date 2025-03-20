import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  constructor() { }

  @Input() User: any
  @Output() editUser = new EventEmitter<any>();

  saveChanges(data: any) {
    this.editUser.emit(data)
  }
}
