import {NextRequest,NextResponse} from "next/server"; 


export const proxy = (request:NextRequest) => {

console.log(request.url); 



if(request.url.includes( "/register") || request.url.includes("/login")){
    return NextResponse.next();
}

const token = request.cookies.get('tokenLogin'); 
if(!token){
    return NextResponse.redirect(new URL('/login',request.url))
}

return NextResponse.next(); 

}

export const config = {
  matcher: ["/", "/login","/perfil", "/perfiles","/post"]
}