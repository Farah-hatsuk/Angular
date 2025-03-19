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


  postProduct(data: any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products",data);
  }



  // data of users

  postRegistrationUser(data: any) {
    return this._http.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data)
  }

  getUserLogin() {
    return this._http.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }


  //add category + products

  addCategory(data: any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories",data)
  }


  addProduct(data: any) {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products",data)
  }

  // edit category 

  updateCatehory(id: any, data: any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}` , data )
  }

  getCategoryById(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }


  //edit product

  updateProduct(id: any, data: any) {
    return this._http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`,data)
  }

  getProductId(id: any) {
    return this._http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }


}
