import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';



@NgModule({
  declarations: [
    NavbarAdminComponent
  ],
  exports: [
    NavbarAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
