import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-voucher',
  standalone: false,
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {

  constructor(private _myser: MyServiceService) { }

  ngOnInit() {
    this.getVoucher()
  }


  voucher: any
  getVoucher() {
    this._myser.getVoucher().subscribe((data) => {
      this.voucher = data
    })
  }

}
