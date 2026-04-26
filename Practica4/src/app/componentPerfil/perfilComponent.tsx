'use client';
import { miPerfil } from "@/lib/api"
import { PostResponse, UserResponse } from "@/types/types";
import { useState,useEffect} from "react";
import ComponentePost from "../postFunctions/postComponent";
import "./styles.css";


const PerfilComponent = () => {

const [user,setUser] = useState<UserResponse>(); 
const [posts,setPosts] = useState<PostResponse[]>();
const [loading,setLoading] = useState<boolean>(true);

const getUser = () => {
    const response =  miPerfil()
    .then((e)=>{setUser(e.user),setPosts(e.posts)})
    .finally(()=>{setLoading(false)})
}



useEffect(()=>{
getUser();
},[])

if(loading){
    return (<h1 className="carData">Loading...</h1>)
}
return(

    <div className="cardData">
        
        <h1>User: {user?.username}</h1>
        <p>Email: {user?.email}</p>
        <p>Password: ********</p>
        <p>Seguidores:{user?.seguidores.length}</p>
        <p>Seguidos: {user?.seguidos.length}</p>
        <br/>
        <div>

        {!loading && posts && posts.map((e)=>{
            return(
                <div key={e._id}>
                    <ComponentePost post={e}/>
                </div>
            )
        })}
        </div>
    </div>
)


}
export default PerfilComponent;