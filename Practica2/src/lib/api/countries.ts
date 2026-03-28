import { Country } from "@/types/countries"
import { api } from "./axios"



export const getAllCountries = async() => {

    const response = await api.get<Country[]>(`/all?fields=name,region,flags,population,languages,currencies,cca3`)

    return response.data;
}


export const getCountryByName = async(name:string) => {

    const response = await api.get<Country[]>(`/name/${name}`);
    return response.data;
}