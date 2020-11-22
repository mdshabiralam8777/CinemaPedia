import { Injectable } from '@angular/core';
import { from } from 'rxjs';
// basically a listener and trigger is subject
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject;

  constructor() { }
//called from the product item
  sendMsg(product){
    console.log(product)
    this.subject.next(product) //triggering an event

  }
//called from the cart item
  getMsg(){
    return this.subject.asObservable()

  }
}
