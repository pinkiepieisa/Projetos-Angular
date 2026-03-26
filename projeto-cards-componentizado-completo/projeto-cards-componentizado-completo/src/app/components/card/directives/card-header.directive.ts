import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: { 'class': 'ca-c-card__header' }
  // Interliga a diretiva ao scss global, atribuindo ele à ela
})
export class CardHeaderDirective {}
