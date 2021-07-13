import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule, //, {useHash: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Route Guards
// CanActivate -> Guard navigation to a route
// CanDeactivate -> Guard navigation from a route
// Resolve -> Pre-fetch data before activating a route
// CanLoad -> Prevent asynchronous routing
