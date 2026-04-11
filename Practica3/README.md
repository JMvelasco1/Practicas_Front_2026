Practica 3 Programacion De Interfaces Web.

#1 Ejecución del proyecto:

-> Tras clonar el proyecto será necesario tener instalado npm para manejar e instalar sus dependencias, tambien será necesario instalar axios, mediante npm install axios, una vez tengamos npm nos situaremos en la carpeta donde esté nuestro proyecto y en terminal correremos npm install para instalar las dependencias del proyecto del package.json.Es posible que debido a como esta ordenado el repositorio en carpetas haya que modificar los imports del proyecto

-> Una vez instaladas las dependencias para correr el proyecto escribiremos npm run dev en terminal.


#2 Utilities del proyecto

-> Carpeta de types, en esta carpeta tenemos dos archivos, uno en el que crearemos los tipos y otro en el que los exportaremos globalmente.

-> Carpeta de lip y api para la llamada de axios en la que tenemos dos archivos, uno para las funciones de la api y otro para la llamada a 

-->Carpeta de contexto donde creamos el contexto con su provider y su hook ademas de las funciones que queremos pasarle

-->Carpeta de components con los componentes divididos en una carpeta por componente para almacenar el tsx y css de ese componente

-->Carpeta de carrito para redireccionar a pagina donde renderizo los elementos añadidos al carrito

-->Carpeta de products/[id] carpeta donde redirecciono a pagina dinamica para renderizar los detalles de un producto mediante su id

#3 Contexto y Provider

Como se ha visto en clase para crear el proyecto deberemos crearnos un tipo especifico para el contexto que contendra las funciones y las variables que le vamos a pasar, haremos uso de createContext para crear el contexto ProductContext y crearemos el Provider pasandole la propiedad de children, en el declararemos las funciones y su logica además de la variable que queremos almacenar mediante un useState y un useEffect y despues lo devolveremos con el tag ProductsContext., finalmente crearemos el hook para poder usar nuestro contexto en otras partes del proyecto con useContext devolviendo el contexto y manejando el caso en el que no se tenga el contexto. 

Finalmente iremos a la carpeta de layout e inyectaremos el Provider en body el cual contará con children dentro de los dos tags que inyectaremos.

#4 Landing page

En nuestro archivo page.tsx de app haremos la llamada a la api y manejaremos la barra de búsqueda mediante un filter ya que la funcion searchProduct creada con el endpoint de la api era defectuosa pues al llamarla devolvia elementos que contuviesen las letras buscadas independientemnte del orden por ejemplo red enseñaba un pintalabios y un filete.

A diferencia del proyecto anterior introduzco una nueva variable count que sirve para actualizar el carrito con el numero de elementos que contiene además de hacer uso del componente Wrapper que usa contexto para pasarle un css que son los márgenes negros a los lados y arriba y manejar el estado de la variable loading como vimos en clase. 

Además tambien mapeo el array de productos para poder pasarselo al componente ProductsComponent

#5 Componentes 

    ->Componente ProductsComponent le paso cada producto de forma individual y renderizo las propiedades que me interesan (categoria,titulo,precio ...), respecto a la anterior practica lo unica que cambia es que llamo al hook del contexto para poder usar la lista y sus funciones para poder añadir y borrar elementos del carrito y como sugirió el profesor de prácticas un botón para la redirección de a la pagina de detalles en vez de tener que pinchar en el div entero o la imagen.  

    ->Componente Details al igual que en la practica anterior le paso el id mediante la funcion de useParams que provee next/navigation y con la función de getProductDetails creada en las funciones de la api con el endpoint /${id} llamo al producto cuyo id corresponde con el de la ruta y obtengo el objeto, aparte de los useState habituales añado uno nuevo para las imagenes ya que vienen en un array y mediante la variable cambio la imagen del array de imagenes mediante dos botones con un caracter de flecha que al igual que al lupa de la barra de busquedas provienen de paginas que proveen un copia/pega de ese caracter/emoji, finalmente envuelvo el codigo en el componente Wrapper para que tenga el mismo css que en la landing page, tambien se le pasa list para añadir elementos al carrito

    ->Componente Wrapper como se vio en la clase de contextos uso la misma estructura que nos enseño el profesor pasando y tipando children y la funcion que quiero pasar y le aplico el css de wrapper.css consistente en aplicar los margenes negros y el radio a lo que hay dentro de esos margenes

    ->Componente carrito se usa el hook de useList para acceder a lista, mapearla y renderizar cada elemento con el componente de ProductsComponent,se le pasa tambien el componente wrapper para aplicar los margenes

