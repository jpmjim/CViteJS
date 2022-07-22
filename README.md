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