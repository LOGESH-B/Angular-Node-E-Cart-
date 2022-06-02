import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Directive, Type } from '@angular/core';




import { Product } from './product';
import { ProductserviceService } from './productservice.service';
import { Route } from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  msg: any = 'No Req';
  products: any;
  productService;
  pro_id: any;
  pro: any;
  constructor(private httpclient: HttpClient) {
    this.productService = new ProductserviceService(httpclient);
    this.products = this.getallproducts();
  }

  title = 'mini_project';

  async getallproducts() {
    this.products = await this.productService.getProducts('All');
    return this.products
  }

}
