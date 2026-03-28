'use client'; 
import { getAllCountries, getCountryByName } from "@/lib/api/countries";
import { Country } from "@/types/countries";
import {useState,useEffect} from "react";
import CountryComponent from "./components/countryComponent";
import "./globals.css"


const Home = () => {


  const [name,setName] = useState<string>(""); 
  const [finalName, setFinalName] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(true); 
  const [countries,setCountries] = useState<Country[] | null>([])
  const [error,setError] = useState<string>(""); 



const fetchCountries = async() => {
  setLoading(true); 
  const res = await getAllCountries()
  .then((e)=>{  setCountries(e); })
  .catch((e)=>{setError(`Ha habido un error cargando los paises: ${e}`)})
  .finally(()=>setLoading(false)); 
}

const searchCountry = async(name:string) => {
  const res= getCountryByName(name)
  .then((e)=>{setCountries(e)})
 .catch((e)=>{setError(`Ha habido un error cargando los paises: ${e}`)})
  .finally(()=>setLoading(false)); 
}

useEffect(()=>{
fetchCountries(); 
},[])


useEffect(()=>{
searchCountry(finalName)
},[finalName])

return(
<>
  
  <div className="searchBar">
     <input onChange={(e)=>{setName(e.target.value)}} value={name} placeholder={"Introduce un pais"}/>
      <button onClick={()=>{setFinalName(name)}}>Search</button>
    </div>
      <div className="home">
    {loading && <h3>Loading...</h3>}
    {!loading && countries && countries.map((c)=>{
      return(
        
          <div key={c.cca3} className="homeCards">
          <CountryComponent countries={c}/>
            </div>
    
      )
    })}
    </div>
  </>
)




}


export default Home; 