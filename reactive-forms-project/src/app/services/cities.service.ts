import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ICitiesResponse } from "../interfaces/cities-response/cities-response.interface";
import { CitiesList } from "../types/cities-list";

@Injectable({
    providedIn: 'root',
})

export class CitiesService {
    constructor(
        private readonly _http: HttpClient
    ) {}

    getCities(countryName: string, cityName: string): Observable<CitiesList> {
        return this._http.post<ICitiesResponse>(
            'https://countriesnow.space/api/v0.1/countries/state/cities',
            {
                contry: countryName,
                state: cityName
            }
        ).pipe(
            map((citiesResponse) => {
                return citiesResponse.data;
            })
        )
    }
}