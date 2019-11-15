import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DriversComponent } from './drivers/drivers.component';
import {DemoService} from './service/demo.service';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
//import {FlashMessagesModule} from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DriversComponent,
    DriverDetailsComponent,
    UpdateDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
   // FlashMessagesModule

  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
