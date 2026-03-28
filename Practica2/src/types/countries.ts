


/*
filtrar por region
nombre oficial, capital, subregión, lenguajes y monedas.
bandera, el nombre común y la población.
*/

export type Country = {
  cca3:string;
  flags:Flags;
  name:Name;
  population: number;
  region: string;
  capital: string[];
  subregion: string;
  languages:string;
  currencies:string;
};


export type NativeName = {
    abv:string; 
    name:string;
}

export type Name = {
    common:string; 
    official:string;
    nativeName:NativeName[];
}

export type Flags = {
    png:string; 
    svg:string; 
    alt:string;
}