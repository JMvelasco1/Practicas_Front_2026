Practica 2 Programacion De Interfaces Web.

#1 Ejecución del proyecto:

    -> Tras clonar el proyecto será necesario tener instalado npm para manejar e instalar sus dependencias, tambien será necesario instalar axios, mediante npm install axios, una vez tengamos npm nos situaremos en la carpeta donde esté nuestro proyecto y en terminal correremos npm install para instalar las dependencias del proyecto del package.json.Es posible que debido a como esta ordenado el repositorio en carpetas haya que modificar los imports del proyecto

    -> Una vez instaladas las dependencias para correr el proyecto escribiremos npm run dev en terminal.

#2 Utilities del proyecto

    -> Carpeta de types, en esta carpeta tenemos dos archivos, uno en el que crearemos los tipos y otro en el que los exportaremos globalmente.

    -> Carpeta lib se puede omitir pero por motivos de limpieza se mantiene, esta carpeta cuenta con una subcarpeta api con el archivo api.ts en donde hacemos la llamada a la api mediante el cliente axios y el cual luego exportamos para poder manejar la url de la api en donde necesitamos llamar a diferentes rutas de la api y un archivo countries.ts donde crearemos y exportaremos las funciones que necesitaremos para hacer llamadas a la api como la busqueda por nombre o simplemente la llamada que nos devuelve todos los paises.

#3 Proyecto

    -> Los aspectos principales de este proyecto son los dos componentes CountryComponent y Details, además de las dos páginas /app/page.tsx y /app/country/[name]/page.tsx 

        -> En la primera página manejamos la llamada en la que obtendremos todos los paises y la búsqueda, para ello usaremos las funciones fetchCountries y searchCountry que llamarán a las funciones que hemos creado en countries.ts y las cuales meteremos en el useEffect ya que queremos que se rendericen lo primero de todo, finalmente llamamos al componente CountryComponent y le pasamos el pais mapeado.

        -> CountryComponent: es el componente encargado de renderizar los paises obtenidos al llamar a la api, recibe como parámetro el pais mapeado en la página principal y simplementa renderiza el nombre, la bandera, la poblacion y mediante Link , la redireccion a la segunda página en la ruta /country/[name]. 

        -> En la segunda página simplemente llamamos al componente Details

        -> Details: es el componente encargado de renderizar el pais que hemos pinchado previamente en la página principal, mediante la ruta /country/[name] y el uso del hook useParams() obtenemos el nombre del país especifico que le pasaremos a la funcion getCountryByName en countries.ts, al no poder filtrar por un identificador unico ya que teniamos que usar el nombre esto resultaba en que al renderizar la página se cargaban paises que compartian el mismo nombre, para arreglarlo se ha accedido a la primera posicion del array de paises que llegaban al hacer la llamada.
 
#4 Problemas encontrados y estructura de navegacion

    -> Al ser languages y currencies datos anidados especiales ("id con tipo":{var1:tipo,var2:tipo}) y al no haber dado la manera de tiparlos en clase se manejaron tipandolos como string y luego modificando esas propiedades al usarlas con un JSON.stringify convirtiendolo a un string y usando replaceAll para quitar las llaves y comillas, esta idea viene de haber visto el JSON.stringify en la ultima clase y saber que la api nos devuele un JSON.

    -> La navegación simplemente ha sido estructurada mediante la carpeta country, su subcarpeta [name] y el tag Link de Next.js para hacer la redireccion. 
    
