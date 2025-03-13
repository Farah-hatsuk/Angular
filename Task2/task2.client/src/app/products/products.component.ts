import { Component } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private _myser: MyServiceService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  categoryId: any
  dataProduct: any

  getProduct() {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this._myser.getDataByProdectId().subscribe((data) => {
      this.dataProduct = data.filter((P: any) => P.categoryId == this.categoryId)
    })
  }

}
