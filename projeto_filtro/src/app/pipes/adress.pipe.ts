import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'adress'
})
export class AdressPipe implements PipeTransform {

  transform(adress: IAddress): string {
    const INVALID_ADRESS = 
    !adress || !adress.rua || !adress.cidade || !adress.estado
    || adress.numero === null || adress.numero === undefined;

    if(INVALID_ADRESS) {
      return 'Endereço inválido ou indisponível!';
    }

    return `${adress.rua}, ${adress.numero}, ${adress.cidade} - ${adress.estado}`
  }

}
