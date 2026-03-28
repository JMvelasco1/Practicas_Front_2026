'use client';

import { Country } from "@/types/countries";
import Link from "next/link";


const CountryComponent = (params:{countries:Country}) => {
    

const countries = params.countries; 



return(
    <div>
        <h1>{countries.name.common}</h1>
       <Link href={`/country/${countries.name.official}`}><img src={countries.flags.png} alt={countries.flags.alt}/></Link>
        <p>Population {countries.population} inhabitants</p>

    </div>
)

}

export default CountryComponent; 