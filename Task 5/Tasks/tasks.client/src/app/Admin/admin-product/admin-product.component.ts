import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  standalone: false,
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {
  constructor(private _myser: MyServiceService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }


  dataProduct: any

  getProduct() {
    

    this._myser.getDataByProdectId().subscribe((data) => {
      this.dataProduct = data
    })
  }
}
