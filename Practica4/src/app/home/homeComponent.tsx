'use client'; 
import {useState,useEffect} from "react"; 
import { HomeResponse, PostResponse } from "@/types/types";
import { api } from "@/lib/api/axios";
import "./styles.css";
import { PostContent } from "@/lib/api";
import ComponentePost from "../postFunctions/postComponent";
import NavegacionComponent from "../navegacion/navComponent";
export const HomeComponent = () => {


const [posts,setPosts] = useState<HomeResponse | null>(null); 
const [page,setPage] = useState<number | null>(0); 
const [error,setError] = useState<string>(""); 
const [loading,setLoading] = useState<boolean>(true);
const [contenido,setContenido] = useState<string>("");
const [reloadTrigger,setReloadTrigger] = useState<number>(0);

/*Me creo la variable del reloadTrigger para poder refrescar los posts al publicar
    sin tener que estar vigilando los posts todo el rato ya que consume muchas llamadas a la api
*/ 


const LandingInHome = async() => {
    const token = localStorage.getItem("tokenLogin") || ""; 
    const response = await api.get<HomeResponse>(`/home?page=${page}&limit=10`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data;
}



const handlePosts = () => {
    const response = LandingInHome()
    .then((e)=>{setPosts(e)})
    .catch((e)=>{setError(`Ha habido un error ${e}`)})
    .finally(()=>{setLoading(false)});
}


const handleContenido = (e:any) => {

    e.preventDefault(); 
    const response = PostContent(contenido) 
    setContenido("");
}


useEffect(()=>{
    handlePosts();
},[page,reloadTrigger])

if(loading){
    return(<h1>Loading ....</h1>)
}
if(error){
    return(<h1>{error}</h1>)
}


return(



    <div className="homeContainer">

        <div>
        <NavegacionComponent/>
        </div>

        <div className="formPost">
            <form onSubmit={handleContenido}>
                <input type="text" onChange={(e)=>{setContenido((e.currentTarget.value))}} value={contenido} placeholder="¿Algo que compartir con el resto?"/>
                <button type="submit" onClick={()=>{setReloadTrigger(reloadTrigger+1)}}>Publicar</button>
            </form>
        </div>

        {posts && posts.posts.map((e)=>{            
            return(
               <ComponentePost key={e._id} post={e}/>
            )
        })}
       {posts && 
        <div className="paginacion">
        <button onClick={()=>setPage(posts.pagina-1)}>{"<"}</button>
        <button onClick={()=>setPage(posts.pagina+1)}>{">"}</button>
        </div>}
    </div>
)



}

export default HomeComponent;