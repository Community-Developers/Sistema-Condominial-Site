import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';


//Module

//Pages
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './search/search-bar/search-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
