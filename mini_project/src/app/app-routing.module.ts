import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { PurchaseComponent } from './purchase/purchase.component';




const routes: Routes = [
  {
    path:"newproduct",
    component:NewproductComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'purchase',
    component:PurchaseComponent
  },
  {
    path:'details/cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
