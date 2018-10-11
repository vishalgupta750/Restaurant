import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService implements OnInit {k
  constructor(private http: HttpClient) {

  }

  configUrl = 'assets/data.json';
  public cart: any = [];
  public length: number;
  public flag: number = 0;
  public i: number;
  public total: number = 0;
  public msg: string;
  public json: any;



  ngOnInit() {
    //this.getData();
  }
  getData() {
    // return this.http.get("assets/data.json").catch(this.errorHandler);
    return this.http.get("http://ShivaniChaudhry:8083/poc/restaurant/all").catch(this.errorHandler);    
    // return this.http.get("http://kumarshubham:8083/poc/restaurant").catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    if (error.status == 404) {
      this.msg = "Url is not correct"
    }
    if (error.status == 500) {
      this.msg = "The request was not completed. The server met an unexpected condition."
    }

    return Observable.throw(this.msg || error.message);
  }

  addItem(item) {
    this.cart.forEach(element => {
      if (item.itemId == element.itemId) {
        this.flag = 1;
      }
    }
    )
    if (this.flag == 1) {
      alert("This Item is already in cart");
      this.flag = 0;
    }
    else {
      this.cart.push(item);
      console.log(this.cart);
    };

  }

  getLength() {
    this.length = this.cart.length;
    return this.length;
  }

  getCart() {
    return this.cart;
  }
  decreaseQuantity(data) {
    if (data.quantity == 1) {
      for (this.i = 0; this.i < this.cart.length; this.i++) {
        if (this.cart[this.i].item_Id == data.item_Id) {
          this.cart.splice(this.i, 1);
        }
      }
    }
    else {
      data.quantity = data.quantity - 1;
    }

    this.getLength();
    this.total = 0;
    console.log(this.cart);
  }
  increaseQuantity(data) {
    data.quantity = data.quantity + 1;
    this.total = 0;
    console.log(this.cart);
  }

  totalAmount() {
    for (this.i = 0; this.i < this.cart.length; this.i++) {
      this.total = this.total + this.cart[this.i].rate * this.cart[this.i].quantity;
    }
    return this.total;
  }

  placeOrders(): Observable<any> {
    this.json = JSON.stringify(this.cart);
    console.log(this.json);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    // this.json+httpParamSerealizer();
    console.log(this.json);
    return this.http.post("http://kumarshubham:8083/poc/cart/add", this.json, httpOptions);
  }

}
