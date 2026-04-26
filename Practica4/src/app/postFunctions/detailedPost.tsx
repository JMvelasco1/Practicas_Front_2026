'use client';

import {useState,useEffect} from "react";
import { Comentario, HomeResponse, PostResponse } from "@/types/types";
import "./styles.css";
import { Likes, postComment, Retweet } from "@/lib/api";


const DetailedPost = ({post}:{post:PostResponse}) => {

const [postNuevo,setPostNuevo] = useState<PostResponse>(post);
const [comment,setComment] = useState<string>("");
const [verComentarios,setVerComentarios] = useState<boolean>(true);

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


const newComment = (e:any) => {
    e.preventDefault();
     const response  = postComment(comment,postNuevo._id)
    .then((e=>setPostNuevo(e)))
    .finally(()=>setComment(""))
    return response;
}

const toggleComentarios = () => {
    
    if(verComentarios){setVerComentarios(false)}
    if(!verComentarios){setVerComentarios(true)}
}

    return(

        <div>
             <div key={postNuevo._id} className="postContainer">
                    <p>Posted by: {postNuevo.autor.username}</p>
                    <span>{postNuevo.contenido}</span>
                    <div>
                    {verComentarios && <span>{postNuevo.comentarios.map((e:Comentario)=>{
                        return(
                            <div key={e._id} className="commentContainer">
                                <p>{e.autor.username} commented: {e.contenido}</p>
                                <p>{e.fecha}</p>
                            </div>
                        )
                    })}</span>}</div>
                    <div>
                    <button onClick={()=>handleLikes()}>❤️ {postNuevo.likes.length}</button>
                    <button onClick={()=>{toggleComentarios()}}>💬 {postNuevo.comentarios.length}</button>
                    <button onClick={()=>handleRetweet()}>🔁 {postNuevo.retweets.length}</button>
                    </div>

            <div className="formPost">
            <form onSubmit={(e)=>newComment(e)}>
                <input type="text" onChange={(e)=>{setComment((e.currentTarget.value))}} value={comment} placeholder="Escribe un comentario"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
                </div>
        </div>
        
    )


}

export default DetailedPost;