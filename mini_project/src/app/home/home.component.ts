import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg: any = 'No Req';
  products: any;
  myapp: any;
  productservice: ProductserviceService
  constructor(myapp1: AppComponent, service: ProductserviceService) {
    this.productservice = service
    this.myapp = myapp1
    this.getallproduct()
  }
  async getallproduct() {
    this.products = await this.productservice.getProducts('All');
    console.log(this.products)
  }
  async getproducts(type: any) {
    this.products = await this.productservice.getProducts(type.target.value);
  }
  setdetail(pro_id: number) {
    this.productservice.setdetails(pro_id)
  }

  ngOnInit(): void {


  }
}
