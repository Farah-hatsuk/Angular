import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  constructor(private _myser: MyServiceService, private _active: ActivatedRoute, private _route: Router) { }


  dataCategory: any
  ngOnInit() {
    this.categoryId = this._active.snapshot.paramMap.get("id")
    this._myser.getCategoryById(this.categoryId).subscribe((data) => {
      this.dataCategory = data
    })
  }

  categoryId: any
  editCategory(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id")
    this._myser.updateCatehory(this.categoryId, data).subscribe(() => {
      alert("update successfully")
      this._route.navigate(["/Dashboard/getCategory"])
    })
  }


}
