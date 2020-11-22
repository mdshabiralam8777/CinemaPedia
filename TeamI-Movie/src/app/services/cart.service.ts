import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Products } from '../models/products';
import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems():Observable<CartItem[]>{
    // mapping the obtained results to our CartItem Props
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any)=>{
        // console.log(result);
        // return result;

        let cartItems:CartItem[]=[];
        for(let item of result){
          let productExists=false;
          for(let i in cartItems){
              if(cartItems[i].productId===item.product.id){
                cartItems[i].qty++;
                productExists=true;
                break;
              }
            }
          if(!productExists){
           cartItems.push(new CartItem(item.id,item.product)); 
          }
          // this.calcCartTotal();
         }

        return cartItems
      })
    )
  }

  addProductToCart(product:Products):Observable<any>{
    return this.http.post(cartUrl,{product});
  }
  // deleteFromCart(id){
  //   return this.http.delete(cartUrl+'?+)
  // }

}
