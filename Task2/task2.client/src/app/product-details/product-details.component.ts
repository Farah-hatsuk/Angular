import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private _myser: MyServiceService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this._active.snapshot.paramMap.get('id')
    this.getProductId()
  }



  productId: any
  product: any 

  getProductId() {
    if (this.productId) {
      this._myser.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      },
      );

    }

  }
}
