import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any = {
    p_id: 1,
    p_name: 'AAAAAAa',
    p_price: 10000000,
    p_desc: 'This a wounderfull product from the company of apple',
    p_type: 'Mobile',
    p_url: ''
  }
  service: ProductserviceService
  myapp: AppComponent;
  constructor(myapp1: AppComponent, service: ProductserviceService) {
    this.myapp = myapp1
    this.service = service
    this.getdetails();


  }
  async getdetails() {
    this.product = await this.service.getdetails()
    console.log(';;;;;;')
    console.log(this.product);
  }
  async addcart(){
console.log(this.product._id)
    await this.service.addcart(this.product._id);


  }
  async addbuy(){
    console.log(this.product._id)
        await this.service.addbuy(this.product._id);
      }
  ngOnInit(): void {
  }

}
