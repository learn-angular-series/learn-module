import { Component, OnInit } from '@angular/core';
import { OrderService } from './order-service/order.service';

@Component({
  selector: 'order-mng',
  templateUrl: './order-mng.component.html',
  styleUrls: ['./order-mng.component.scss']
})
export class OrderMngComponent implements OnInit {
  orders:Array<any>;

  constructor(
    public orderService:OrderService
  ) { }

  ngOnInit() {
    this.orders=this.orderService.getOrderList();
    console.log(this.orders);
  }

}
