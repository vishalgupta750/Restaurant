import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public cart = [];
  // itemSelected(item) {
  //   this.cart.push(item);
  //   alert("item added to cart");
  //   console.log(this.cart);
  // }

  private data;
  private length:number;
  private tableData:any =[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.receiveData();
    this.receiveLength();

    
  }

  receiveData(){
    this.dataService.getData().subscribe( data => {
      this.tableData = data.response;
      
    });
  }

  itemSelected(item) {
    this.dataService.addItem(item);
    this.ngOnInit();
    // this.receiveLength();
  }

  receiveLength(){

    this.length=this.dataService.getLength();
    
    // this.dataService.getData().subscribe(data=>{this.data=data});
  }

 
  
}
