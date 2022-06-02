import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Product } from "./product";

export class Route {
  route: any;
  data: any;
  msg: any;
  constructor(private httpclient: HttpClient) {
    this.route = this.httpclient;
  }


  products: any;
  async getallproducts() {

    this.data = await this.route.get('http://localhost:8080/products').toPromise()
    this.products = this.data;
    return this.products
  }

  async getdetails(pro_id: number) {
    this.data = await this.route.get(`http://localhost:8080/product/${pro_id}`).toPromise()
    return this.data

  }
  async cartdetails() {
    console.log('3')
    this.data = await this.route.get(`http://localhost:8080/cart`).toPromise()
    console.log(this.data)
    return this.data
  }
  async postcart(_id:any) {
    console.log('3')
    console.log(_id)
     await this.route.post(`http://localhost:8080/cart`,{_id}).toPromise()
   
  }
  async buydetails() {
    console.log('3')
    this.data = await this.route.get(`http://localhost:8080/purchase`).toPromise()
    console.log(this.data)
    return this.data
  }
  async postbuy(_id:any) {
    console.log('3')
    console.log(_id)
     await this.route.post(`http://localhost:8080/purchase`,{_id}).toPromise()
   
  }

  async addproduct(pro: Product) {
    let httpHeaders = new HttpHeaders({
      'content-Type': 'application/json'
    });
    this.data = await this.route.post('http://localhost:8080/newproducts', pro).toPromise()
    this.msg = this.data;
    return this.msg


  }
  async getlink() {
    let httpHeaders = new HttpHeaders({
      'content-Type': 'application/json'
    });
    this.data = await this.route.get('http://localhost:8080/products/LOGESH', { headers: httpHeaders }).toPromise()
    this.msg = this.data;
    return this.msg
  }
}