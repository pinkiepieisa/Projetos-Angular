import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {

  transform(maritalStatus: number | undefined ): string {
    const maritalStatusMap: { [key in MaritalStatusEnum]: string } = {
      [MaritalStatusEnum.SINGLE]: 'Solteiro',
      [MaritalStatusEnum.MARRIED]: 'Casadado',
      [MaritalStatusEnum.DIVORCED]: 'Divorciado',
      // Tipagem restrita a apenas o Enum
    };

    return maritalStatus ? maritalStatusMap[maritalStatus as MaritalStatusEnum] : '';
  }

}
