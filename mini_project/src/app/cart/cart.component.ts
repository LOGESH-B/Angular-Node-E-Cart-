import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any;
  service:ProductserviceService


  constructor(private http:HttpClient,myservice:ProductserviceService) {
    this.service=myservice  
    this.getdetails()
   }
   async getdetails(){
     this.products=await this.service.cartdetails()

     console.log(this.products.card_id[0])
   }
   setdetail(pro_id: number) {
    this.service.setdetails(pro_id)
  }
  ngOnInit(): void {
  }

}
