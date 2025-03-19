import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  constructor(private _myser: MyServiceService, private _active: ActivatedRoute, private _route: Router) { }


  dataProduct: any
  ngOnInit() {
    let productId = this._active.snapshot.paramMap.get("id")
    this._myser.getProductId(productId).subscribe((data) => {
      this.dataProduct = data
    })

    this.GetAllCategories()
  }




  productId: any
  editProduct(data: any) {
    let productId = this._active.snapshot.paramMap.get("id")
    this._myser.updateProduct(productId, data).subscribe(() => {
      alert("update successfully")
      this._route.navigate(["/Dashboard/getProduct"])
    })
  }



  categories: any
  GetAllCategories() {
    this._myser.getDataCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
