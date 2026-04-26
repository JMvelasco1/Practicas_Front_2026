'use client'; 
import Login from "@/auth/login"
import Register from "@/auth/register";
import {useState} from "react";
import "./styles.css"
const LoginPage = () => {

const [login,setLogin] = useState<boolean>(true); 




return(

    <div>
        {login ?  (
            <div className="loginRegister">
                <h1>Login</h1>
                <Login/>
                <button onClick={()=>{setLogin(false)}}>¿No tienes una cuenta?</button>
            </div>): 
            <div className="loginRegister">
                <h1>Registrarse</h1>
            <Register/>
            <button onClick={()=>{setLogin(true)}}>Ya tengo una cuenta</button></div> }

    </div>
)

}

export default LoginPage;