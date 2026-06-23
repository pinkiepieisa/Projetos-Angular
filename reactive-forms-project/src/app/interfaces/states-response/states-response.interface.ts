import { IBaseCountriesResponse } from "../base-countries-response.interface";
import { IStateResponseData } from "./state-response-data.interface";

export interface IStatesResponse extends IBaseCountriesResponse {
    data: IStateResponseData;
    // Interface que junta todas as menores, ela guarda o conjunto completo
}