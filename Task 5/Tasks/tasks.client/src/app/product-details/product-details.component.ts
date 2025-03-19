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
   
    this.getProductId()
  }



  productId: any
  product: any 

  getProductId() {

    this.productId = this._active.snapshot.paramMap.get('id')
    if (this.productId) {
      this._myser.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      },
      );

    }

  }
}
