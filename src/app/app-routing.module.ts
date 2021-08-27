import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component'; 
import { MobilesComponent } from './components/mobiles/mobiles.component';
const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'offer', component:OffersComponent},
  {path : 'mobiles', component:MobilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
