import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges {
  currentTabIndex: number = 1;

  countriesList: CountriesList = [];
  statesList: StatesList = [];

  private readonly _countriesService = inject(CountriesService);
  //Para acessar as propriedades presentes no Service do País
  //Consegue disparar a chamada HTTP

  private readonly _statesService = inject(StatesService);

  @Input({ required: true }) userSelected: IUser = {} as IUser;
  @Input({ required: true }) isInEditMode: boolean = false;

  ngOnInit() {
    this.getCountriesList();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;
    //Para guardar as mudanças e a key das mudanças

    if (HAS_USER_SELECTED) {
      this.fulfillUserForm(this.userSelected);

      this.getStatesList(this.userSelected.country);
    }
  }

  onCountrySelected(countryName: string) {
    this.getStatesList(countryName);
  }

  private getStatesList(country: string) {
    this._statesService.getStates(country).pipe(take(1)).subscribe((statesList: StatesList) => {
      this.statesList = statesList;
    });
  }

  private getCountriesList() {
    this._countriesService.getCountries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
      this.countriesList = countriesList;
    });
    //Dispara a chamada HTTP fazendo o get dos países

    //Ele para de chamar após uma única chamada http pipe(take(1))
  }

}
