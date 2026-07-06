import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneTypeEnum } from '../../../../enums/phone-type.enum';
import { IPhone } from '../../../../interfaces/user/iphone.interface';
import { IPhoneToDisplay } from '../../../../interfaces/phone-to-display,interface';
import { phoneTypeDescriptionMap } from '../../../../utils/phone-type-description-map';
import { preparePhoneList } from '../../../../utils/prepare-phone-list';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss'
})
export class PhoneListComponent implements OnChanges{
  phoneListToDisplay: IPhoneToDisplay[] = [];

  @Input({ required: true }) userPhoneList: PhoneList | undefined = [];
  // Input que vai receber os dados do usuário selecionado

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);

    if(PHONE_LIST_LOADED) {
      this.preparePhoneListToDisplay();
    }
  }

  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    const originalUserPhoneList = this.userPhoneList && this.userPhoneList.length > 0 ? this.userPhoneList : [];
    
    preparePhoneList(originalUserPhoneList, (phone) => {
      this.phoneListToDisplay.push(phone);
    });
  }
}
