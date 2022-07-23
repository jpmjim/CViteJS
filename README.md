# CViteJS
Curso de Vite.js

## ¿Qué es [Vite](https://vitejs.dev/)?
  Vite es una biblioteca de JavaScript que permite crear aplicaciones web modernas. Vite se basa en el concepto de **web components**.

  - Es una herramienta de 3° generación para el desarrollo de frontend
  - Recolecta toda la información de todas las herramientas que utilizamos hoy en día para el estándar de la industria, como ser Webpack, builder, bundlers, etc.
      - Toda esta serie de herramientas tiene una serie de ventajas, desventajas y pasos evolutivos a través de la historia, los cuales se recolecta y nos ayuda a generar una propuesta de la próxima generación de herramientas
  - Vite nos brinda una Mejor experiencia de desarrollo
      Automatización de recargar el navegador cuando hacemos cambios
      Tener menos configuración a diferencia de otras herramientas
      Mayor velocidad
  - Vite.js se caracteriza por su velocidad, ya que el tiempo para compilar, transpilar es muy rápido
  - Aparte que trae una serie de optimizaciones por debajo que nos permite tener una mejor organización de proyectos sin necesidad de realizar una serie de configuraciones

## Contexto histórico
  [StackBlitz](https://stackblitz.com/) es un IDE (entorno de desarrollo integrado) en línea donde puede crear proyectos Angular, React y Vue rápida y fácilmente en su navegador. Se encarga automáticamente de instalar dependencias, compilar, agrupar, recargar en caliente mientras escribe y mucho más. 

  **IIFE**

  Viene de expresión de función ejecutada inmediatamente. Son funciones que se ejecutan tan pronto como se definen

  **Minificación**

  Es el proceso de eliminar todos los caracteres innecesarios del código fuente de lenguajes de programación interpretados o lenguajes de marcado sin cambiar su funcionalidad.

  **Bundling**

  Es un proceso donde se toma varios archivos y se unifican en uno solo aparte que puede estar minificado.

  **Motor de templates**

  Es una herramienta que te permite tomar archivos y tratarlos con JavaScript para obtener un resultado como un archivo.

  **Transpilación**

  Es convertir los archivos iniciales de un proyecto a archivos distintos para producción distintos de los originales.

  **TypeScript**

  Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases

## Características de Vite
  ### Prebuilding
  - Es estandarizar los módulos
  - Los módulos por muchos años no estuvieron estandarizados hasta que apareció el estándar de ECMAScript con los es modules
  - Aún existen muchos frameworks y librerías que se transpilan para formatos anteriores como ser
    - Common JS
    - UMD
    - AMD
  - Esto hace que haya muchas incompatibilidades en la web, lo que hace vite.js primero es convertirlo en un ES module

  ### Dependency Resolving
  - Va a ayudar a optimizar el cómo se obtiene estas librerías y módulos dentro de nuestro proyecto
  - Lo primero que hace Vite.js es generar un servidor de archivos estático
      - Es decir, que va a tomar todos los archivos del proyecto y los va a hacer disponibles para acceder desde el navegador
      - De esta manera va a reemplazar los imports vía node.js por urls
  - También se asegura de servir los archivos de forma inteligente y con caché, para optimizar tiempo y procesamiento
      - Esto lo hace subdividiendo las dependencias y ordenando las importaciones para que todo esté listo para el momento de uso
      - Utiliza un caché fuerte, el cual se asegura que los archivos se queden en el navegador a menos que se limpie la caché del mismo

  ### Hot Module Replacement (HRM)
  - Es hacer que ni bien se guarden los archivos en el editor automáticamente se reflejen los cambios sin necesidad recargar el navegador sin perder el estado de la aplicación
  - Permite una mejor experiencia de desarrollo al ser mucho más rápido que los convencionales

  ### Integración simple con TypeScript
  - Desde el primer momento el proyecto de Vite tiene integración con TypeScript sin necesidad de alguna configuración adicional
  - Es opcional la configuración de TypeScript
    Es totalmente utilizable con cualquier librería o framework

  ### Integración con frameworks
  - Soporte perfecto con Vue.js
      - Vite es desarrollado por el team de Vue.js por lo cual la integración es simple y completa
  - Útil para usar JSX con Vue.js
  - Hace que sea extremadamente simple usar Vite con React.js

  ### Integración de archivos
  - Resuelve la importación sin necesidad de loaders
  - Es simple de usar con archivos multimedia, de estilos, de código o con los pre-procesadores más comunes, incluyendo TypeScript

  ### Build Optimization
  - Permite tomar el control de la configuración
      - Es opcional el archivo de configuración para vite
  - Optimiza la velocidad en desarrollo gracias a esbuild
  - Optimiza el bundle de producción gracias a rollup
      - Mediante el archivo de configuración de Vite se puede configurar el bundler de Rollup
  - Rollup al momento de optimizar hace la importación de dependencias de manera inteligente
      - Realiza la tarea de forma inteligente de saber cuáles son los módulos que utilizará el proyecto y predecir hasta cierto punto cuáles son los módulos que van a seguir para importarlos de un inicio

  ### Soporte a Web Workers y Web Assembly
  - Los web workers son una característica de JavaScript para crear procesos alternativos al proceso principal de donde se ejecuta nuestra página web y estos tienen una configuración que puede ser tediosa
      - Con Vite nos permite únicamente importar y utilizarlos
  - Vite.js nos permite Web Assembly importando los archivo e invocándolo de una cierta manera para que se ejecute
      - Si requiere inyectar alguna dependencia te permite realizarlo
      - Vite te facilita el uso a diferencia de vanilla JS

## ¿Cómo instalar Vite?
  [Repo CViteJS](https://github.com/platzi/curso-vite)

  Recomendado:
  ```
  node -v
  v16.16.0

  npm -v
  6.13.3
  ```  
  Comando instalar:
  ```
  npm create vite@latest
  ```
  Configuración:
  ```bash
  Need to install the following packages:
  create-vite@3.0.0
  Ok to proceed? (y) y
  ✔ Project name: nombre-proyecto
  ? Select a framework: › - Use arrow-keys. Return to submit.
  ❯ vanilla
    vue
    react
    preact
    lit
    svelte
  ```
  Comandos de arranque:
  ```bash
  Now run:

  cd cvitejs
  npm install
  npm run dev
  ```
  Server en local:
  ```bash
  VITE v3.0.2  ready in 153 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ```

## Boilerplate de Vite
  - Todas las configuraciones las podemos realizar en el archivo [vite.config.js](https://vitejs.dev/config/)
  - El punto de acceso por defecto es index.html pero podemos cambiar para que sea un .html, .js, .ts
  - En el archivo punto package.json tenemos los scripts iniciales del proyecto
  - $npm run dev Levanta el servidor en desarrollo
  - $npm run build Genera la carpeta /dist donde están los archivos para prod
  - $npm run preview Levanta un servidor que nos permite ver el proyecto generado en /dist
  - Cuando vemos el proyecto renderizado en el navegador podemos observar que agrega un parametro que indica en timestamp que representa el momento cuando fue generado.
    ```html
      <script type=”module” src=”/main.jst=2345676344”><script>
    ```
  - Esto tiene relación a que los archivos están en el cache el navegador y para renderizar los cambios necesitamos que sean refrescados

  - **Para forzar el limpiado de la cache**
  
    Importante resaltar que puede llegar a ser necesario FORZAR LIMPIAR LA CACHE PARA PODER VER LOS CAMBIOS

    Debemos seguir los pasos:
      - Click en los tres puntos superiores del navegador
      - “Más herramientas”/”Herramientas del desarrollador”/”Application”/Storage”
      - Marcar el check de “Cache”/”Cache storage”
      - Click en “Clear site data”
    
    o tambien:
      - Click derecho
      - Inspeccionar”/”Application”/Storage”
      - Marcar el check de “Cache”/”Cache storage”
      - Click en “Clear site data”

  - Interesante ver el archivo style.css no es un archivo css normal. Cómo se hablo anteriormente Vite convierte todos los archivos en un archivo ECMAScript Module para usarlo de manera universal.

  - El svg que se menciona en el curso se encuentra en la carpeta public
  - Esta carpeta public sirve para obtener cualquier archivo disponible a la hora de publicar a prod y por defecto esta carpeta esta siendo expuesta por vite

## Importar CSS
  - Podemos importar usando
    ```
    @import './style.css';4
    ```
  - Como los archivos están quedando en el cache del servidor es posible que al inspeccionar podamos ver ambas versiones, pero como queda asociado por la variable de timestamp los cambios se pueden ver y no genera conflictos.
  ![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202022-07-09%20a%20la%28s%29%201.26.55%20p.%C2%A0m.-0475539c-a824-4c65-a678-758be95ba233.jpg)


  - Cuando tenemos imports entre archivos.
    - Vite puede inyectar un archivo dentro de otro y subir uno solo al navegador
    - Vite determina que uno de ellos es muy grande y los envía separados
  - Si queremos borrar los archivos anteriores debemos forzar el limpiado de la cache (Creo que esto puede ser bastante tedioso)

## Pre-procesadores CSS
  Sass es un pre-procesador de CSS que nos permite trabajar con archivos sass y convertirlos a CSS para que Vite pueda trabajar con ellos.
  - Para instalarlo:
    ```bash
    npm install sass-loader node-sass
    ```
  Pre procesadores son plugins que se ejecutan antes de que Vite procese el CSS.

## CSS Modules
  Una manera de usarlo en React es:
  CSS o SCSS Modules

  - El objetivo de esto es conseguir que el CSS que declaremos sea relativo y único hacia el componente que lo estamos importando.

  - ¿Cómo hacer que una clase de CSS sea única, dándole un nombre único y diferente? se consigue con modules CSS que apoyado en un bundle permite generar un identificador único para cada clase del CSS

  A nuestros archivos de CSS debemos agregarle un **.module.css**
  ```
  NombreComponente.module.css
  ```
  Sin embargo también la manera de importarlos y usarlos en nuestro componentes sera diferente:
  ```javascript
  import style from './NombreComponente.module.css'

  function NombreComponente({ todos }) {
    return (
      <div className={stlye.container}>
        <p>Content</p>
      </div>
    );
  }

  export { NombreComponente};
  ```
  Si queremos usar más dos clases para una solo etiqueta podemos usar template Strings o template literals, respetando el espacio en medio que tienen dichas clases.
  ```javascript
  div className={`${stlye.container} ${stlye.margin}`}>
  ```
  No olvidemos usar el normalize o un reset de CSS ya que todos los navegadores tienen diferentes márgenes por lo cual nuestro CSS pueden llegar a colapsar.

## Importar imágenes
  Podemos importar nuestra imagenes usando
  ```javascript
  import img from "./example-img.png"

  // inside templates
  <img src="${img}">
  ```

## Importar [JSON](https://vitejs.dev/guide/features.html#json)
  Podemos importar nuestros archivos JSON usando
  ```javascript
  import data from "./data.json"
  ```
  Podemos acceder a los datos del archivo JSON usando
  ```javascript
  data.name
  ```

  Ejecutamos nuestro proyecto para producción el cual nos genera la carpeta dist que contiene los archivos que necesitamos para producción.

## [Importación global](https://vitejs.dev/guide/features.html#glob-import)
  Vite supports importing multiple modules from the file system via the special **import.meta.glob**.
  
  Aqui el ejemplo de la clase trabajado con async await:
  ```javascript
  const modules = import.meta.glob('./modules/*.js');

  for(const path in modules){
    async function fetchModule(){
      const module = await modules[path]();
      module.load();
    }
    fetchModule();
    // modules[path]().then((module)=>{
    //   module.load();
    // })
  }

  console.info(modules);
  ```