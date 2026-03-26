import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: { 'class': 'ca-c-card__header' }
  // Interliga a diretiva ao scss global, atribuindo ele à ela
})

export class CardHeaderDirective {
  // @Input()
  // @HostBinding('class') color: string = '';
  // //Para utilizar a classe a fim de alterar a cor do header

  
}
