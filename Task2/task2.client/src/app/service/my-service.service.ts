import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http: HttpClient) { }

  getDataCategory() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }

  getDataByProdectId() {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products")
  }


  private productsUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';

  getProductById(productId: string): Observable<any> {
    return this._http.get<any>(`${this.productsUrl}/${productId}`);
  }
}
