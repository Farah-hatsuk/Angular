import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(private _myser: MyServiceService) { }

  ngOnInit() { }

  dataCategory: any
  addCategory(category: any) {
    this._myser.addCategory(category).subscribe(() => {
      alert("added category")
    })
  }
}
