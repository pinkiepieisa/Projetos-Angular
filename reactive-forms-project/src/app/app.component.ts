import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _countriesService: CountriesService
  ) {}

  // Carrega a cada reinício da página 
  ngOnInit() {
    this._countriesService.getCountriess().subscribe((countriesResponse) => {
      console.log('countriesResponse', countriesResponse);
    });
  }

}
