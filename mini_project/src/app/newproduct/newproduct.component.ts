import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  newProduct!:Product;


  constructor(private service:ProductserviceService) { 
  }

  ngOnInit(): void {
  }
  newpro=new FormGroup({
    p_id:new FormControl('',Validators.required),
    p_name:new FormControl('',Validators.required),
    p_desc:new FormControl('',Validators.required),
    p_price:new FormControl('',Validators.required),
    p_type:new FormControl('',Validators.required),
    p_url:new FormControl('',Validators.required),
  })

  newproduct(newpro:FormGroup){
    this.newProduct=newpro.value
    this.service.addproduct(this.newProduct)

  }

}
