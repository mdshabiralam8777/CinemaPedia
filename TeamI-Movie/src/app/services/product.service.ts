import { Injectable } from '@angular/core';
import {Products} from '../models/products';
import {Observable} from 'rxjs';
import{apiCsk, apiPosters, apiUnisexMensUrl,apiWomens,apiAccessories} from 'src/app/config/api'

import {HttpClient} from '@angular/common/http';

// const apiUnisexMensUrl='http://localhost:3000/unisexMens'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products:Products[]=[
  //   new Products(1,'Tees',249,'https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077'),
  //   new Products(2,'Tees2',249,'https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077'),
  //   new Products(3,'Tees3',249,'https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077'),
  //   new Products(4,'Tees4',249,'https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077'),
  //   new Products(5,'Tees5',249,'https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077'),
  //   new Products(6,'Tees6',249,'https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077'),
  //   new Products(7,'Tees7',249,'https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077')
  // ]

  constructor(private http : HttpClient) { }
  // observable is of data type of products array
  getPosters():Observable<Products[]>{
    // populates product from api and return an observable
    // posters api
    return this.http.get<Products[]>(apiPosters);    
  }
  getCsk():Observable<Products[]>{
  //  csk api
    return this.http.get<Products[]>(apiCsk);
  }
  getUnisex():Observable<Products[]>{
   //unisex mens api
    return this.http.get<Products[]>(apiUnisexMensUrl);;
  }
  getAccessories():Observable<Products[]>{
 // accessories
    return this.http.get<Products[]>(apiAccessories);
  }
  getWomens():Observable<Products[]>{
    // womens edition
    return this.http.get<Products[]>(apiWomens);
  }
}
