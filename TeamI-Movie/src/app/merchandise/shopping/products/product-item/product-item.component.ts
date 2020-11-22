import { Component, OnInit,Input } from '@angular/core';
import { from } from 'rxjs';
import { Products } from 'src/app/models/products';
import{MessengerService} from 'src/app/services/messenger.service';
import{CartService} from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Router } from '@angular/router';
import { ViewsComponent } from 'src/app/merchandise/shopping/view-details/views/views.component' 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:Products;
  @Input() addedToWishlist:boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist(){
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist=true;
    })
    // console.log(productId)
  }

  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist=false;
    })
    // console.log(productId)
  }

  viewDetails(product){
    this.router.navigate(["/viewDetails"])
    console.log(product)
    ViewsComponent.displayViewDetails(product);
  }
}
