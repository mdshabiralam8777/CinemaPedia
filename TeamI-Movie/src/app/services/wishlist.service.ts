import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {loginUrl, registerUrl, wishlistUrl} from 'src/app/config/api';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishlist(){
    return this.http.get(wishlistUrl).pipe(
      map((result:any[])=>{
        let productId=[]

        result.forEach(item=>productId.push(item.name))
        return productId;
      })
    )
  }
  addToWishlist(productId){
    // console.log(productId)
    return this.http.post(wishlistUrl,{id:productId})
  }
  removeFromWishlist(productId){
    // console.log(productId)
    return this.http.delete(wishlistUrl+'/'+productId)
  }

  loginHelper(val){
    // console.log(val);
    return this.http.post(loginUrl,val);
  }
  registerHelper(val){
    // console.log(val);
    return this.http.post(registerUrl,val);
  }
  getUserInfo(val){
    return this.http.get(registerUrl +'?'+ `password=${val}`)
  }
}
