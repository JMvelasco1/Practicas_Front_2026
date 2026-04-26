'use client';
import {useState} from "react";
import { UserResponse } from "@/types/types";
import { LoginUser } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";



const Login = () => {

const [user,setUser] = useState<UserResponse | null>(null)
const [password,setPassword] = useState<string>(""); 
const [email,setEmail] = useState<string>("");
const [finalEmail,setFinalEmail] = useState<string>(""); 
const [finalPassword,setFinalPassword] = useState<string>("");  
const [error,setError] = useState<string>("");

const router = useRouter();

const fetchUserLogin = (e:any) => {
   e.preventDefault();


    const response = LoginUser(email,password)
    .then((e)=>{setUser(e.user),
        localStorage.setItem ("tokenLogin",e.token);
        document.cookie= `tokenLogin=${e.token}; path=/`
        console.log(e);
    })
    .catch((e)=>{setError(`Ha habido un error ${e}`)})
    .finally(()=>{
        const token = localStorage.getItem("tokenLogin") || "";
        if(token){
            return(router.push("/"));
        }
    });
    console.log("Response:",response);
}

return ( 


  <div className="cardLogin">
        <form onSubmit={fetchUserLogin}>
        <input type={"text"} onChange ={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Introduce tu email"/>
        <input type={"password"}onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder={"Introduce tu contraseña"}/>
        <button onClick={((e)=>{setFinalEmail(email),setFinalPassword(password)})} type={"submit"}>Acceder</button>
    </form>
    
   

    </div>
)

}


export default Login; 