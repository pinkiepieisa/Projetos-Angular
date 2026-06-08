import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
// Instância única independente de quantas vezes for injetado

export class StatesService {
    constructor(
        private readonly _http: HttpClient
    ) {} 
    // Para poder fazer a injeção de dependência

    getStates(countryName: string): any {
        return this._http.post<any>(
            'https://countriesnow.space/api/v0.1/countries/states',
            {country: countryName}
        ).pipe(
            map((countryName) => {
                return countryName.data.states;
            })
        ); //Post, URL + o que deve conter no BODY da chamada do post
    }
}