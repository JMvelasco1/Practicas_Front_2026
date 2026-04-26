export type RegisterData = {
    username:string;
    email:string;
    password:string
}
export type UserResponse = {
    id:string; 
    username:string; 
    email:string; 
    bio:string;
    seguidores:{
        id:string;
        username:string;
    }[],
    seguidos:{
        id:string;
        username:string
    }[],
}

export type AuthResponse = {
    user:UserResponse; 
    token:string; 
}

export type Comentario = {
    _id:string;
    contenido:string;
    autor:{
        _id:string;
        username:string;
    }; 
    fecha:string; 
}

export type PostResponse = {
    _id:string; 
    contenido:string;
    autor:{
        _id:string;
        username:string; 
    }
    likes:string[];
    retweets:{
        usuario:string;
        fecha:Date;
    }[],
    comentarios:Comentario[];
    createdAt:Date; 
    updatedAt:Date;
}


export type HomeResponse = {
    posts:PostResponse[]; 
    pagina:number; 
    totalPaginas:number; 
    totalPosts:number;
}


export type ProfileResponse = {
    user:UserResponse; 
    posts:PostResponse[];
}


export type FollowResponse = {
    siguiendo:boolean; 
    user:UserResponse; 
}

export type ErrorResponse = {
    error:string, 
}