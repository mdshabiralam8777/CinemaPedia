import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import {MessengerService} from 'src/app/services/messenger.service'
import{CartItem} from 'src/app/models/cart-item'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[];
  cartTotal=0;
  constructor(
    private msg :MessengerService,
    private cartService:CartService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    
  }
  // inc(){
  //   this.cartItems.map(item=>{
  //     item.qty++;
  //   })
  // }
  // dec(){
  //   this.cartItems.forEach(item=>{
  //     item.qty--;
  //   })
  // }
  deleteFromCart(){
    this.cartItems.splice(0,1);
    // this.cartService.deleteFromCart(id)
  }
  placeOrder(){
    this.router.navigate(["/checkout"])
  }
  handleSubscription(){
    this.msg.getMsg().subscribe(()=>{
      this.loadCartItems();
    })
  }
  loadCartItems(){
    this.cartService.getCartItems().subscribe((items:CartItem[])=>{
    this.cartItems=items;
    this.calcCartTotal();
  })
  }
  calcCartTotal(){
    this.cartTotal=0;
    this.cartItems.forEach(item=>{
      this.cartTotal+=(item.qty * item.price)
    })
  }
  }

  
    