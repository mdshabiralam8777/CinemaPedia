import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductsComponent } from 'src/app/merchandise/shopping/products/products.component';
@Component({
  selector: 'app-home4ff',
  templateUrl: './home4ff.component.html',
  styleUrls: ['./home4ff.component.css']
})
export class Home4ffComponent implements OnInit {

  constructor(private router:Router,
    private productService:ProductService) { }

  ngOnInit(): void {
  }
  displayMainpage(){
    this.router.navigate(["/merchandiseMainPage"])
  }
  getWomensAPI(){
    this.productService.getWomens().subscribe((products)=>{
      ProductsComponent.loadWomen(products);
      this.router.navigate(["/womens"]);
    })
  }
  getpostersAPI(){
    this.productService.getPosters().subscribe((products)=>{
      ProductsComponent.loadWomen(products);
      this.router.navigate(["/posters"]);
    })
  }
  getunisexAPI(){
    this.productService.getUnisex().subscribe((products)=>{
      ProductsComponent.loadWomen(products);
      this.router.navigate(["/unisex"]);
    })
  }
  getaccessoriesAPI(){
    this.productService.getAccessories().subscribe((products)=>{
      ProductsComponent.loadWomen(products);
      this.router.navigate(["/accessories"]);
    })
  }
  getcskAPI(){
    this.productService.getCsk().subscribe((products)=>{
      ProductsComponent.loadWomen(products);
      this.router.navigate(["/csk"]);
    })
  }

}
