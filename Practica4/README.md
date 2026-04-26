#1 Ejecución del proyecto:

-> Tras clonar el proyecto será necesario tener instalado npm para manejar e instalar sus dependencias, tambien será necesario instalar axios, mediante npm install axios, una vez tengamos npm nos situaremos en la carpeta donde esté nuestro proyecto y en terminal correremos npm install para instalar las dependencias del proyecto del package.json.Es posible que debido a como esta ordenado el repositorio en carpetas haya que modificar los imports del proyecto

-> Una vez instaladas las dependencias para correr el proyecto escribiremos npm run dev en terminal.

#2 Lib/Api
-> En esta carpeta creo el archivo axios.ts donde mediante axios.create añado la url de la api que voy a llamar
y añado el header:"x-nombre" con mi nombre para no tener que añadirlo en todas las funciones que creare en index.ts, el archivo en el que creo funciones especificas a las que voy el path que necesito para llamar a ese endpoint especifico de la api, menos en login y register en el resto añado el header de Authorization: `Bearer` con la token que obtengo de login y register. En los post añado el header en la tercera posicion del body y en los get en la segunda

#3 Types
-> En esta carpeta creo los tipos que usaré en la implementación de los componentes siguiendo los esquemas
de la api, aunque tuve que modificar UserResponse porque el esquema no mostraba los seguidores , tuve que añadirlos tras ver el response de la llamada del perfil en la app de vercel de prueba. 
Para no hacer muchos tipos como para la propiedad retweet, simplemente abro {} y meto las propiedades de retweet, lo cual queda más limpio que tener varios types. 

#4 Auth
->En esta carpeta creo los componentes de register y login creando dos formularios y obteniendo generando el token en el register el cual me devuelve luego la llamada al endpoint de login el cual uso luego en el archivo proxy.ts para evitar que se acceda a las diferentes rutas sin el token, en el componente de login redirijo al usuario a / despues de comprobar que tiene el token. 

#5 Proxy
-> En este archivo simplemente creo el proxy como nos enseño el profesor de teoría en clase añadiendo a config las rutas que quiero que se chequee si el usuario tiene el token y haciendo la redirección pertinente cuando no lo tiene a la ruta de /login

#6 page.tsx
--> La pagina principal del proyecto, en ella solamente llamo al componente HomeComponent y añado el titulo de la pagina

#7 HomeComponent

-> En el me creo varias variables de estado para manejar los elementos de la pagina, primero mediante la funcion LandingInHome que llama al endpoint de la api que devuele los posts guardo los posts en una de estas variables, el motivo para usarla aqui es que no podría acceder a las paginas ni posts para para la paginacion desde el archivo de index.ts donde estan el resto de funciones.

->Tras manejar la paginación y los posts, llamo a una funcion post para poder publicar los posts nuevos mediante el formulario que creo en esta pagina, ademas de manejar el loading y posibles errores, además creo una variable de estado reloadTrigger para recargar los posts cuando se publique el post y no tener que estar haciendo llamadas todo el rato a la api para obtener los posts,finalmente paso los posts al componentePost

->Además en vez de usar el layout para la cabecera he creado un componente NavegacionComponent, que ire pasando en las páginas que quiero que tengan la cabecera con los botones de navegacion, ya que al implementarlo en el layout me di cuenta que tambien aparecia en el las paginas de register y login. 

#8 componentePost
 ->Se encarga de renderizar la información necesaria de cada post, además en el llamo a las funciones Retweet,newComment y Likes para manejar estas funcionalidades del post aunque para acceder a los detalles del post hay que pulsar en el boton de comentarios ya que al intentar ponerlo en el div se sobreponia sobre la redireccion al perfil del autor del post

#9 DetailedPost
 ->Este componente es casi igual que el anterior solo que en este creo la funcionalidad para añadir nuevos comentarios con un formulario y una funcion para manejar la llamada al api además de añadir el toggle para ver u ocultar los comentarios.

#10 post/[id]

->En esta carpeta creo una pagina para la ruta en donde uso useParams y una función que llama a un endpoint de la api que devuelve un post especifico mediante su id, tras obtener el post y guardarlo en una variable de estado lo renderizo con el componente anterior. 

#11 componentePerfil

->Esta carpeta cuenta con los componentes para obtener un usuario especifico y el usuario de la persona logada 
->En el componente perfilComponent creo variables de estado para manejar el usuario y los posts que me devuelve la llamada a la api , despues manejo el loading ya que hay veces que la api es lenta y es mejor mostrar el loading a que se vea en blanco, mapeo los posts del usuario y los renderizo con el componente #8
->En el componente otrosPerfilesComponente hago lo mismo pero llamando al endpoint que devuelve un usuario por id además de crear la función de followers para mediante la api poder seguir y dejar de seguir a otros usuarios.Por otro lado como ya he dicho antes añado nuevas propiedades que he visto en la llamada de la api para poder acceder a seguidores y seguidos en el tipo UserResponse

#12 navegaciónComponent 

->En este componente simplemente creo los botones de navegación que pasaré al resto de paginas y creo la función de logout en la que modifico la cookie para borrarla cambiando el expire a una fecha en la que no existian siquiera las cookies para asegurarme de que se borra y además redirijo al usuario a la pagina de login.

#13 Login
 
->En esta carpeta creo una pagina donde llamo al componente login y al de register

#14 Perfil

->En esta carpeta creo una pagina en la que llamo al componente perfilComponent

#15 Perfiles/[id]
-> En esta carpeta creo una ruta dinamica para poder acceder desde la pagina mediante useParams al id que le paso al presionar en el nombre de otro usuario en cualquier post para renderizar su perfil mediante el componente otrosPerfilesComponente

En cuanto al css se intento usar el de la pagina prueba pero al ser tailwind se optó por crear uno propio con lo visto en clase, para las "imagenes" de los botones de la cabecera y de los posts se han usado emojis copiados de paginas que proveen emojis. 