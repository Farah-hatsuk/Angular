import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-admin-category',
  standalone: false,
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.css'
})
export class AdminCategoryComponent {
  constructor(private _myser: MyServiceService) { }

  ngOnInit() {
    this.getCategory();
  }

  dataContainer: any
  getCategory() {
    this._myser.getDataCategory().subscribe((data) => {
      this.dataContainer = data;
    });
  }
}
