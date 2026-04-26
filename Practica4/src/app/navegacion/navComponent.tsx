'use client';
import Link from "next/link";
import "./styles.css";
import { useRouter } from "next/navigation";

const NavegacionComponent = () => {

   const router = useRouter(); 

const logOut  = () => {
   localStorage.removeItem("tokenLogin");
   document.cookie="tokenLogin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=;"

   return(
    router.push("/login")
   )
}

    return(
        
         <div className="botonesNav">
            <button><Link href="/">🏠︎</Link></button>
            <button><Link href="/perfil">👤</Link></button>
            <button onClick={()=>logOut()}>{"➜]"}</button>
        </div>
    )        
}

export default NavegacionComponent;