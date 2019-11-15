import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
//import {FlashMessagesService} from 'angular2-flash-messages';

import { from } from 'rxjs';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  name:String;
  nic:String;
  email:String;
  addr:String;
  contactno:String;

  constructor(
    private demoService:DemoService,
    // private FlashMessage:FlashMessagesService
  ) { 

  }

  ngOnInit() {
  }

  save(){

    const driver={
      name:this.name,
      nic:this.nic,
      email:this.email,
      addr:this.addr,
      contactno:this.contactno

    };

    console.log(driver);

    

     this.demoService.saveDriver(driver).subscribe(res=>{
       console.log(res);
     //  if(res.state)
       //this.FlashMessage.show('Failed to insert', { cssClass: 'alert-dander', timeout: 2000 });
    //   alert("Failed to Insert");
      // else
       //this.FlashMessage.show('Added Successfully', {cssClass:'alert-success', timeout:2000});
      if(res.state){
        alert('Data Inserted!');
      }
        else{
        alert('data not inserted');
        }
     });
     
  }

}
