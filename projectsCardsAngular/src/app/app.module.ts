import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvailableBalanceComponent } from './components/available-balance/available-balance.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { ComponentGeralComponent } from './components/component-geral/component-geral.component';
import { LineComponent } from './components/components/line/line.component';
import { ItemComponent } from './components/components/item/item.component';
import { TitleComponent } from './components/components/title/title.component';
import { ImageComponent } from './components/components/image/image.component';
import { HeaderComponent } from './components/components/header/header.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableBalanceComponent,
    CreditCardComponent,
    DebitCardComponent,
    CustomerInformationComponent,
    ComponentGeralComponent,
    LineComponent,
    ItemComponent,
    TitleComponent,
    ImageComponent,
    HeaderComponent,
    CardItemComponent,
    CardLineComponent,
    CardTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
