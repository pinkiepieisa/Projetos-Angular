import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersList: UsersListResponse = [];
  currentIndex: number = 1;

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService,
  ) {}
  // Para realizar a injeção de dependência

  // Carrega a cada reinício da página 
  ngOnInit() {
    // this._countriesService.getCountries().subscribe((countriesResponse) => {
    //   console.log('countriesResponse', countriesResponse);
    // });
    // // getCoutries

    // this._statesService.getStates('Brazil').subscribe((statesResponse) => {
    //   console.log('statesResponse', statesResponse);
    // });
    // // getStates 
    // // 'Brazil' -> por conta do parametro exigido no body do chamado do post

    // this._citiesService.getCities('Brazil', 'São Paulo').subscribe((citiesResponse) => {
    //   console.log('citiesResponse', citiesResponse)
    // });
    // //GetCities

    this._usersService.getUsers().pipe(take(1)).subscribe((usersListResponse) => this.usersList = usersListResponse);
    //Passa para a lista os usuários dentro do array
    // pipe(take(1)) -> Para ele não ficar ouvindo o observable e ouvir apenas 1 vez
  }
}
