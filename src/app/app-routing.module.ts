import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component'; 
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { BtechComponent } from './components/btech/btech.component';
import { C2021Component } from './components/btech/c2021/c2021.component';
const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'btech', component:BtechComponent, children: [
    
    {path: '2021', component: C2021Component}, 
  ]},
  {path : 'offer', component:OffersComponent},
  {path : 'mobiles', component:MobilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
