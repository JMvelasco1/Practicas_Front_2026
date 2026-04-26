'use client';
import { followProfile, othersProfiles } from "@/lib/api";
import {useState,useEffect} from "react"; 
import { useParams } from "next/navigation";
import { PostResponse, UserResponse } from "@/types/types";
import ComponentePost from "../postFunctions/postComponent";
import "./styles.css";
import Link from "next/link";

const OtrosPerfilesComponent = () => {

const {id} = useParams(); 

const [posts,setPosts] = useState<PostResponse[]>(); 
const [user,setUser] = useState<UserResponse>();
const [siguiendo,setSiguiendo]  = useState<boolean>(false);
const [loading,setLoading] = useState<boolean>(true);


const getProfiles = () => {
    const response = othersProfiles(String(id))
    .then((e)=>{setUser(e.user),setPosts(e.posts)})
    .finally(()=>{setLoading(false)})
};

const Followers = () => {
    
    const response = followProfile(String(id))
    .then((e)=>{setUser(e.user),setSiguiendo(e.siguiendo)})

    console.log("Seguidores: ",response);
    return response;
}

useEffect(()=>{
getProfiles();
},[])

if(loading){
   return(<h1>Loading...</h1>)
}

return(

    
    <div>
        {!loading && 
    <div className="cardData">
        <Link href="/">{"<- Volver"}</Link>
        <div className="dataUser">
        <h1>{user?.username}</h1>
        <button onClick={()=>Followers()}>Seguir</button>
        </div>
        <div className="dataFollowers">
        <p>Seguidores:{user?.seguidores.length}</p>
        <p>Seguidos:{user?.seguidos.length}</p>
        </div>
        <br/>
        <div>
        <p>Publicaciones:{posts?.length}</p>
        {posts && posts.map((e)=>{
            return(
                <div key={e._id}>
                    <ComponentePost post={e}/>
                </div>
            )
        })}
        </div>
    </div>}
    </div>

)



}
export default OtrosPerfilesComponent;