import { Component, OnInit,Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  // @Input() productItem:Products;
  static productItem;
  static displayViewDetails(products){
    ViewsComponent.productItem=products;
  }

  get productItem(){
    return ViewsComponent.productItem;
  }
  
  constructor(private cartService:CartService,
    private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })
  }

}
