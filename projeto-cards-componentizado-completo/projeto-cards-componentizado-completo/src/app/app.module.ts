import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderDirective } from './components/card/directives/card-header.directive';
import { CardContentDirective } from './components/card/directives/card-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientCardComponent,
    CardItemComponent,
    CardLineComponent,
    CardTitleComponent,
    CardComponent,
    CardHeaderDirective,
    CardContentDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
