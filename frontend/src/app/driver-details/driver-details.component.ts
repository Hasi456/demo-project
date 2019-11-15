import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import {Router} from '@angular/router';
import Driver from '../Driver';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css'],
  providers:[DemoService]
})
export class DriverDetailsComponent implements OnInit {

  driverdetails:any=[]
  private driver:Driver;

  constructor(private demoService:DemoService, private router:Router) { }

  ngOnInit() {
   // this.getDriverDetails();

 //  this.driver=this.demoService.getter();
   this.demoService.getAllDrivers().subscribe((data)=>{

      this.driverdetails=data;
      console.log(data);
      //this.driverdetails= Array.of(this.driverdetails);

     
      
    });
}
/*
editDriver(id){
 this.demoService.setter(this.driver)
  this.router.navigate(['/update_driver/'+id])
}*/
deleteDriver(id){
  if(confirm("Are you sure you want to delete!!")){
  this.demoService.deleteByID(id).subscribe(res => {
    console.log('Deleted');
    this.ngOnInit();
  
});
}
}



/*
  getDriverDetails(){

    this.demoService.getAllDrivers().subscribe((product:Driver[])=>{

      this.driverdetails=product;
  
    });
  }*/

/*
driverdetails:Driver[]=[
  {ID:23, name:"wjw", nic:"23232",email:"3e3ee3", address:"ede",phone_no:"2323"},
  {ID:23, name:"wjw", nic:"23232",email:"3e3ee3", address:"ede",phone_no:"2323"}
]*/

}


