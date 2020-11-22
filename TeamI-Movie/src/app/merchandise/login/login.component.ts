import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={}
  static isLoggedIn:boolean=false;
  static username:string;
  constructor(private wishlistService:WishlistService,
    private router:Router) { }

  ngOnInit(): void {
  }
 

  credentials(val){
    // console.log(val);
    LoginComponent.username=val.username
    this.wishlistService.getUserInfo(val.password).subscribe(res=>{
      console.log(res);
      if(res['length']!=0){
        LoginComponent.isLoggedIn=true;
        this.router.navigate(['/merchandiseMainPage']);
      }else{
        alert('invalid user name or password')
      }
    })

  }

}
