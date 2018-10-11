import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent} from './home/home.component';
import { AdminComponent} from './admin/admin.component';

// const routes: Routes=[{path:'cart',component:'CartComponent'}]
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent

  },
  {
    path: 'cart', component: CartComponent

  },
  {
    path: 'admin', component: AdminComponent

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
