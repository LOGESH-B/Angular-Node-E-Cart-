import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from './routes'
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  products: any;
  pro: any;
  pro_id!: number;
  msg: any;

  route: any;

  constructor(httpclient: HttpClient) {
    this.route = new Route(httpclient);
  }


  async getProducts(type: string) {
    var selected_products: Product[] = [];
    if (type == 'All') {
      this.products = await this.route.getallproducts();
      return this.products
    }
    else {
      this.products.forEach((ele: any) => {
        if (ele.p_type == type) {
          selected_products.push(ele);
        }
      });
      return selected_products;
    }
  }

  async getdetails() {
    this.pro = await this.route.getdetails(this.pro_id);
    return this.pro;
  }
  async cartdetails() {
    this.pro = await this.route.cartdetails();
    return this.pro[0];
  }
  async addcart(_id:any){
    await this.route.postcart(_id)
  }
  async buydetails() {
    this.pro = await this.route.buydetails();
    return this.pro[0];
  }
  async addbuy(_id:any){
    await this.route.postbuy(_id)
  }


  setdetails(pro_id: any) {
    this.pro_id = pro_id;
  }


  async addproduct(pro: Product) {
    this.msg = await this.route.addproduct(pro)
    return this.msg
  }


}
