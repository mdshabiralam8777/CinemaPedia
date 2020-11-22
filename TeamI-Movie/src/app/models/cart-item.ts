import { Products } from './products';
export class CartItem {
    id:number;
    productId:number;
    productName:string;
    price:number;
    qty:number;
    constructor(id:number,product:Products,qty=1){
        this.id=id;
        this.qty=qty;
        this.productId=product.id;
        this.productName=product.name;
        this.price=product.price;
    }
}
