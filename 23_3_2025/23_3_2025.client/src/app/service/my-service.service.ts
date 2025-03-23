import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http: HttpClient) { }

  getVoucher() {
    return this._http.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher`)
  }

  getVoucherById(id: any) {
    return this._http.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)
  }

  postVoucher(data: any) {
    return this._http.post(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher` , data)
  }

  updateVoucher(id: any, data: any) {
    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}` , data)
  }

}
