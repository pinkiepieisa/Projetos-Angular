import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvailableBalanceComponent } from './components/available-balance/available-balance.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { ComponentGeralComponent } from './components/component-geral/component-geral.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableBalanceComponent,
    CreditCardComponent,
    DebitCardComponent,
    CustomerInformationComponent,
    ComponentGeralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
