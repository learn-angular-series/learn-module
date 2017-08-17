import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor() { }

  public getOrderList():Array<any>{
    return [
      {orderId:'10086',orderName:'ForTest'},
      {orderId:'10087',orderName:'ForTest'},
      {orderId:'10088',orderName:'ForTest'},
      {orderId:'10089',orderName:'ForTest'},
      {orderId:'10090',orderName:'ForTest'}
    ];
  }
}
