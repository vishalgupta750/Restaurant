
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatOptionModule, MatSelectModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatTableModule} from '@angular/material/table';



import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';


@NgModule({

  declarations: [AppComponent, CartComponent, HomeComponent, AdminComponent
  ],

  imports: [BrowserModule, HttpClientModule, MatCheckboxModule, MatCardModule,
    AppRoutingModule, MatButtonModule, BrowserAnimationsModule, MatInputModule,
    MatFormFieldModule, FormsModule,ReactiveFormsModule, MatOptionModule, MatSelectModule
  ],

  providers: [DataService],

  bootstrap: [AppComponent]

})

export class
  AppModule { }


