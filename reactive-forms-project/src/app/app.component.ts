import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
  ) {}
  // Para realizar a injeção de dependência

  // Carrega a cada reinício da página 
  ngOnInit() {
    this._countriesService.getCountries().subscribe((countriesResponse) => {
      console.log('countriesResponse', countriesResponse);
    });
    // getCoutries

    this._statesService.getStates('Brazil').subscribe((statesResponse) => {
      console.log('statesResponse', statesResponse);
    });
  }
  // getStates 
  // 'Brazil' -> por conta do parametro exigido no body do chamado do post
}
