import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginFrom=new FormGroup({
    
       email:new FormControl('',[Validators.required,Validators.email]),
    firstname:new FormControl('',Validators.required),
    adr:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
       state: new FormControl('',Validators.required),
       zip: new FormControl('',Validators.required),
    
    })
  collectData(){
    console.log
    (this.loginFrom.value);
    alert("All submission is ok")
    
  
  }
  get firstname(){return this.loginFrom.get('firstname')};
  get email(){return this.loginFrom.get('email')};
  get adr(){return this.loginFrom.get('adr')};
  get city(){return this.loginFrom.get('city')};
  get state(){return this.loginFrom.get('state')};
  get zip(){return this.loginFrom.get('zip')};

ordersuccess(){
  this.router.navigate(["/orderplaced"])
}
}
