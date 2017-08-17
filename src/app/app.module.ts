import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserMngComponent } from './user-mng/user-mng.component';
import { RoleMngComponent } from './role-mng/role-mng.component';
import { OrderMngComponent } from './order-mng/order-mng.component';
import { OrderService } from './order-mng/order-service/order.service';

@NgModule({
  declarations: [
    AppComponent,
    UserMngComponent,
    RoleMngComponent,
    OrderMngComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
