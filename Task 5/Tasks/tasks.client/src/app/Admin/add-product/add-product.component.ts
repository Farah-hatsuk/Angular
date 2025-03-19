import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private _myser: MyServiceService) { }

  ngOnInit() {
    this.GetAllCategories()
  }

  addProduct(data: any) {
    return this._myser.addProduct(data).subscribe(() => {

    })
  }

  categories: any
  GetAllCategories() {
    this._myser.getDataCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
