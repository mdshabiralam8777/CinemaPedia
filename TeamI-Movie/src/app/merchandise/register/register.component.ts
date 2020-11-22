import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { loginUrl } from 'src/app/config/api';
import { WishlistService } from 'src/app/services/wishlist.service';

/**
@param form
*/
function passwordsMatchValidators(form){
  const password=form.get('password')
  const confirmPassword=form.get('confirmPassword')

  if(password.value !== confirmPassword.value){
    confirmPassword.setErrors({passwordsMatch:true})
  }else{
    confirmPassword.setErrors(null)
  }
}

function splValidators(control){
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

  if(control.value.indexOf('@')>-1){
    return null
  }else{
    return{spl:true}
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerForm:FormGroup;
  constructor(private builder:FormBuilder,
    private wishlistService:WishlistService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.registerForm=this.builder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      username:['',Validators.required],
      password:['',[Validators.required,splValidators,Validators.minLength(8)]],
      confirmPassword:''
    },{
      validators:passwordsMatchValidators
    })
  }
  registerNew(val){
    this.wishlistService.registerHelper(val).subscribe(res=>{
      // console.log(res)
      this.router.navigate(['/login']);
    })
  }
}
