import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardTitleDescription]',
  host: { 'class': 'ca-c-card__description-text' }
})
export class CardTitleDescriptionDirective {


}
