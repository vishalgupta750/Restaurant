import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private length: number;
  private cart: any = [];
  private calculatedArray: any = [];
  private total:number;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.receiveLength();
    this.getCart();
    this.totalAmount();
  }

  receiveLength() {
    this.length = this.dataService.getLength();
  }

  OnClick() {
    this.router.navigate(['home']);
  }

  getCart() {
    this.cart = this.dataService.getCart();
  }

  decreaseQuantity(data) {
    this.dataService.decreaseQuantity(data);
    this.ngOnInit();
  }

  increaseQuantity(data) {
    this.dataService.increaseQuantity(data);
    this.ngOnInit();
  }

  totalAmount(){
    this.total=this.dataService.totalAmount();
  }

  placeOrder(){
    this.dataService.placeOrders().subscribe((res: any)=>{
      console.log('cart data', res);
    });
  }

}
