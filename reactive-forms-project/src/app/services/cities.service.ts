import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class CitiesService {
    constructor(
        private readonly _http: HttpClient
    ) {}

    getCities(countryName: string, cityName: string): any {
        return this._http.post<any>(
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