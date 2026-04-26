'use client';

import {useState,useEffect} from "react";
import { Comentario, HomeResponse, PostResponse } from "@/types/types";
import "./styles.css";
import { Likes, Retweet } from "@/lib/api";
import Link from "next/link";

//Lo queria llamar PostComponent pero no me dejaba importarlo por algun motivo


const ComponentePost = ({post}:{post:PostResponse}) => {

const [postNuevo,setPostNuevo] = useState<PostResponse>(post);


const handleRetweet = () => {

    const response = Retweet(post._id)
    .then((e)=>{setPostNuevo(e)})
    return response;
}

const handleLikes = () => {
    const response = Likes(post._id)
    .then((e)=>{setPostNuevo(e)})
    return response;
}


    return(

        <div>
             <div key={postNuevo._id} className="postContainer">
                    <p>Posted by: <Link href={`/perfiles/${postNuevo.autor._id}`}>{postNuevo.autor.username}</Link></p>
                    <span>{postNuevo.contenido}</span>
                    <div>
                    <button onClick={()=>handleLikes()}>❤️ {postNuevo.likes.length}</button>
                    <button> <Link href={`/post/${postNuevo._id}`}>💬{postNuevo.comentarios.length}</Link></button>
                    <button onClick={()=>handleRetweet()}>🔁 {postNuevo.retweets.length}</button>
                    </div>
                </div>
        </div>
        
    )


}

export default ComponentePost;
