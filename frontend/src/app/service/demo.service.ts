import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import Driver from '../Driver';
//import { Driver } from 'selenium-webdriver/chrome';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private driver:Driver;

  
 // driver:any;
  constructor(
    private http:Http,
    private router:Router
  ) { 

  }

  
  saveDriver(driver){

  //  console.log(driver);
    let header=new Headers();
    header.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/register",driver,{headers:header}).map(res=>res.json());
  }

  getAllDrivers(){
    let header=new Headers();
    header.append('Content-Type','application/json');

    return this.http.get("http://localhost:3000/user/driver_details").map((res:Response)=>res.json());
    
  }

  getByID(id){
     let header=new Headers();
     header.append('Content-Type','application/json');
  
  console.log(id)
    return this.http.get("http://localhost:3000/user/find/"+id).map((res:Response)=>res.json());

  
  }

 deleteByID(id){
  let header=new Headers();
  header.append('Content-Type','application/json');
 
 return this.http.get("http://localhost:3000/user/delete/"+id);

 }

 updateDriver(name,nic,email,address,phone_no,id) {
  const obj = {
    name,
    nic,
    email,
    address,
    phone_no
  };

  console.log(id);
  this.http.post("http://localhost:3000/user/update_driver/"+id, obj).subscribe(res => console.log('Done'));
  
  }
 }


