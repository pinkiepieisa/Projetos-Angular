import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class CountriesService {
    constructor(
        private readonly _httpclient: HttpClient
    ) {}

    getCountriess(): any {
        return this._httpclient.get<any>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
            map((countriesResponse) => {
                return countriesResponse.data;
            }) //pipe com o método map permite manipular o retorno do get
        ); // Dessa forma é possível pegar apenas um dado específico da chamada get
    }
}