export class Products {
    id:number;
    name:string;
    price:number;
    imageUrlMale:string;
    description:string;
    imageUrl:string;
    image_url:string;

    constructor(id,name,price=0,imageUrlMale='https://cdn.shopify.com/s/files/1/1002/7150/files/slider_23.jpg?v=1603367077',description){
        this.id=id;
        this.name=name;
        this.price=price;
        this.imageUrlMale=imageUrlMale;
        this.description=description;
    }
}
