'use client';
import NavegacionComponent from "@/app/navegacion/navComponent";
import { useState,useEffect } from "react";
import { getSinglePost } from "@/lib/api";
import { Comentario, PostResponse } from "@/types/types";
import { useParams } from "next/navigation";
import ComponentePost from "@/app/postFunctions/postComponent";
import DetailedPost from "@/app/postFunctions/detailedPost";








const ComentarioUnico = () => {


const {id} = useParams(); 

const [post,setPost] = useState<PostResponse| null>(null)

const fetchPost = (id:string) => {

    const response = getSinglePost(id).
    then((e)=>{setPost(e)}); 

}

useEffect(()=>{
fetchPost(String(id));
},[])

return(

    <div>
        <div>
            <NavegacionComponent/>
        </div>
        <div>
           {post &&  <DetailedPost post={post}/>}
        </div>
    </div>
)


}

export default ComentarioUnico; 