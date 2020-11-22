import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { LoginComponent } from '../../login/login.component';
import { ProductsComponent } from '../../shopping/products/products.component';


@Component({
  selector: 'app-mpage',
  templateUrl: './mpage.component.html',
  styleUrls: ['./mpage.component.css']
})
export class MpageComponent implements OnInit {
  productsList:Products[]=[];

 username=LoginComponent.username;
  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {

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
