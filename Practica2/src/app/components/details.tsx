'use client';

import { useParams } from "next/navigation";
import {useState,useEffect} from "react";
import { Country } from "@/types/countries";
import { getCountryByName } from "@/lib/api/countries";
import Link from "next/link"
import "./details.css"

const Details = () => {

const {name} = useParams(); 

const [country,setCountry] = useState<Country>()
const [error,setError] = useState<string>(""); 
const [loading,setLoading] = useState<boolean>(true); 

useEffect(()=>{
const res = getCountryByName(String(name))
.then((e)=>{setCountry(e[0]);})
.catch((e)=>{`Ha habido un errror cargando los detalles: ${e}`})
.finally(()=>{setLoading(false)});
},[name])

return(

    <div>
        {!loading && country && 

                <div className="detailsCard">
                <img src={country.flags.png} alt={country.flags.alt}/>
                <h1>{country.name.official}</h1>
                <p>Capital: {country.capital}</p>
                <p>Subregion: {country.subregion}</p>
                <p className="detailsLines">Languages</p>
                <p>{JSON.stringify(country.languages).replaceAll('{','').replaceAll('}','').replaceAll('"','').replaceAll(':',': ').replaceAll(',',' |  ')}</p>
                <p className="detailsLines">Currencies</p>
                <p>{JSON.stringify(country.currencies).replaceAll('{','').replaceAll('}','').replaceAll('"','').replaceAll(':',': ').replaceAll(',',' |  ')}</p>
               <button><Link href="/">Go to home page</Link></button>
                </div>
        
        }
    </div>

)

}

export default Details; 