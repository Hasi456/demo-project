import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DriversComponent} from './drivers/drivers.component';
import {DriverDetailsComponent} from './driver-details/driver-details.component';
import {UpdateDriverComponent} from './update-driver/update-driver.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'driver', component:DriversComponent},
  {path: 'driver_details', component:DriverDetailsComponent},
  {path :'update_driver/:id', component:UpdateDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
