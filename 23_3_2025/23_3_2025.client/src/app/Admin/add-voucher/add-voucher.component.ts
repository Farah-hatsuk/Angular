import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';


@Component({
  selector: 'app-add-voucher',
  standalone: false,
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  constructor(private _myser: MyServiceService) { }

  ngOnInit() {

  }

  addVoucher(data: any) {
    this._myser.postVoucher(data).subscribe(() => {
      alert("added voucher")
    })
  }
}
