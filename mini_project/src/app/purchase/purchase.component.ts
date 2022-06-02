import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  products:any;
  service:ProductserviceService


  constructor(private http:HttpClient,myservice:ProductserviceService) {
    this.service=myservice  
    this.getdetails()
   }
   async getdetails(){
     this.products=await this.service.buydetails()

     console.log(this.products.buy_id[0])
   }
   setdetail(pro_id: number) {
    this.service.setdetails(pro_id)
  }
  ngOnInit(): void {
  }

}
