import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderAst } from '@angular/compiler';
import Driver from '../Driver';





@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css'],
  providers:[DemoService]
})
export class UpdateDriverComponent implements OnInit {

 drivers:any=[];

 
  constructor(private demoservice:DemoService, private route: ActivatedRoute, private router:Router) {
   
   }
    

  ngOnInit() {

 // this.driver=this.demoservice.getter()  

//  this.demoservice.getByID(this.id).subscribe(res=>{
//   console.log(this.id);

//  if(res.state){
//    alert('Data Inserted!');
//  }
//    else{
//    alert('data not inserted');
//    }
  
    //this.route.paramMap.subscribe(paramMap => {
    

    let id=parseInt(this.route.snapshot.paramMap.get('id'));
     this.demoservice.getByID(id).subscribe(res => {
      this.drivers = res;
    });
//  });
  
}
  
updateDriver(name,nic,email,address,phone_no,id) {
  this.route.params.subscribe(params => {
    this.demoservice.updateDriver(name,nic,email,address,phone_no, params.id);
    location.reload();
     this.router.navigate(['driver_details']);
     
  
  });
}
  
}
