import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Products } from 'src/app/models/products';

import {ProductService} from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 static products:Products[]=[];
  wishlist:number[]=[];

  constructor(
    private productService: ProductService,
    private wishlistService:WishlistService
    ) { }

  ngOnInit(): void {
    // this.loadProducts();
    this.loadwishlist();
  }
  static loadWomen(womenProducts){
    ProductsComponent.products=womenProducts
  }
  get products(){
    return ProductsComponent.products;
  }


  loadwishlist(){
    this.wishlistService.getWishlist().subscribe(productId=>{
      console.log(productId);
      this.wishlist=productId;
    })
  }

}
