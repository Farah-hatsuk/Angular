import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddVoucherComponent } from './Admin/add-voucher/add-voucher.component';
import { EditVoucherComponent } from './Admin/edit-voucher/edit-voucher.component';
import { VoucherComponent } from './Admin/voucher/voucher.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "addVoucher", component: AddVoucherComponent },
      { path: "editVoucher/:id", component: EditVoucherComponent },
      { path: "Voucher", component: VoucherComponent },
     

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
