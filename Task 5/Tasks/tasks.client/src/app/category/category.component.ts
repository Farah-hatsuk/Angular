import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

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
