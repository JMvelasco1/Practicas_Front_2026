Practica 1 Programacion De Interfaces Web. 

#1 Ejecución del proyecto:

-> Tras clonar el proyecto será necesario tener instalado npm para manejar e instalar sus dependencias, tambien será necesario instalar axios, mediante npm install axios, una vez tengamos npm nos situaremos en la carpeta donde esté nuestro proyecto y en terminal correremos npm install para instalar las dependencias del proyecto del package.json.Es posible que debido a como esta ordenado el repositorio en carpetas haya que modificar los imports del proyecto

-> Una vez instaladas las dependencias para correr el proyecto escribiremos npm run dev en terminal.

#2 Variables de entorno:

-> El proyecto cuenta con un archivo .env que deberá ser creado y en el que guardaremos de la siguiente manera la api que estemos usando: VITE_API_URL=url_de_la_api, con esto evitaremos exponer la api que estemos usando, además al poner el VITE delante de API_URL, Vite (una herramienta de compilación) detectará que es una variable de entorno que luego importaremos al llamar a la api de la siguiente manera. import.meta.env.VITE_API_URL

#3 Proyecto:

-> Nuestro proyecto cuenta con una carpeta de types en la que tenemos dos archivos, uno en el que crearemos los tipos y otro en el que los exportaremos globalmente.

-> Disponemos de un archivo api.ts en donde hacemos la llamada a la api mediante el cliente axios y el cual luego exportamos para poder manejar la url de la api en donde necesitamos llamar a diferentes rutas de la api. 

-> Además contamos con tres componentes: App.tsx, CharacterList y CharacterCard:

    1.- App.tsx: nuestro componente principal, en crearemos una funcion para hacer un get de la api añadiendo elementos a la ruta para obtener todos los personajes. Usando variables de estado para manejar la paginacion, el listado de personajes, el loading y los errores. El loading y el error se manejan aqui con estados ya que al ser el componente principal en el que llamaremos a otros componentes estas variables de estado afectarán a dichos componentes tambien. En este componente como ya se ha mencionado se llamarán a otros componentes a los cuales les pasaremos estados como variables , a CharacterList le pasaremos el estado con todos los personajes y renderizaremos el componente.

    2.- CharacterList: a este componente le pasamos como parametro el array con los personajes que nos llega de la api, en este archivo simplemente haremos un mapeo para obtener los personajes individualmente y pasarlos como variable al componente CharacterCard para renderizar la información individual de cada personaje.

    3.- CharacterCard: obtendra como parametro el personaje individual y pintaremos su informacion en este, ademas para gestionar el genero de algunos personajes que aparecera como
    n/a se ha creado una funcion para que ponga unkown y por lo menos tengamos más informacion.

    
