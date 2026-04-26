import { AuthResponse, FollowResponse, HomeResponse, PostResponse, ProfileResponse, RegisterData, UserResponse } from "@/types/types";
import { api } from "./axios";




export const RegisterUser = async(name:string,email:string,password:string) => {
    const response = await api.post<AuthResponse>(`/auth/register`, {
        username: name,
        email,
        password
    },);
     
    return response.data.token;
}


export const LoginUser = async (email:string,password:string) => {

    const response = await api.post<AuthResponse>('/auth/login',
        {
            email,
            password
        });
        return response.data;
}



export const PostContent  = async( contenido:string) => {
    const token = localStorage.getItem("tokenLogin") || "";
    const response = await api.post<string>(`/posts`,{contenido},{headers:{
            Authorization:`Bearer ${token}`
        }});

    return response.data;
}


export const miPerfil = async() => {
   const token = localStorage.getItem("tokenLogin") || "";
    const response = await api.get<ProfileResponse>(`/users/me`,{headers:{
            Authorization:`Bearer ${token}`
        }});

    return response.data;
}


export const Retweet = async(id:string) => {
    const token = localStorage.getItem("tokenLogin") || ""; 
    const response = await api.post<PostResponse>(`/posts/${id}/retweet`,{id},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data;
}

export const Likes = async(id:string) => {
    const token = localStorage.getItem("tokenLogin") || ""; 
    const response = await api.post<PostResponse>(`/posts/${id}/like`,{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
} 


export const getSinglePost = async(id:string) => {

    const token= localStorage.getItem("tokenLogin") || ""; 
    const response  = await api.get<PostResponse>(`/posts/${id}`,{headers:{
        Authorization:`Bearer ${token}`
    }})

    return response.data;
}


export const postComment = async(contenido:string,id:string) => {
    
    const token = localStorage.getItem("tokenLogin") || ""; 
    const response = await api.post<PostResponse>(`/posts/${id}/comment`,{contenido},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
}

export const othersProfiles = async(id:string)  => {
   
    const token = localStorage.getItem("tokenLogin") || ""; 
    const response = await api.get<ProfileResponse>(`/users/${id}/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
}


export const followProfile = async(id:string) => {
      const token = localStorage.getItem("tokenLogin") || ""; 
    const response = await api.post<FollowResponse>(`/users/${id}/follow`,{id},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
}