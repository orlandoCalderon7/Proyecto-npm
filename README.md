# Pasos para usar el paquete en el entorno dev

Tenemos un proyecto-npm que sería la carpeta raíz del proyecto.
La carpeta Node_modules contiene todas las dependencias y librerías, esta carpeta se genera automaticamente cuando se instalan los paquetes.
La carpeta src contiene el codigo fuente de la aplicación contenido en dos archivos:
app.js: archivo de javascritp, archivo principal de la lógica de la aplicación.
index.html: pagina principal y punto de entrada de la aplicación.
El archivo package-loc.json registra las versiones de todas las dependencias instaladas en node.modules asegurando que todos los que trabajen en el proyecto utilicen las mismas versiones de las librerías.
El archivo package.json fundamental para el proyecto de Node.js/npm conteniendo metadatos del proyecto (nombre, versión, descripción), scritp personalizados, y una lista de dependencias del proyecto.
El archivo de Markdown README.md que contiene documentación, instrucciones de configuración del proyecto.

¿Cómo funciona el proyecto?
Cuando ejecutas npm install, npm lee el archivo package.json. Descarga e instala todas las dependencias listadas en dependencies (express) y devDependencies (nodemon) dentro de la carpeta node_modules.
Iniciando el servidor:
Si ejecutas npm run start, Node.js ejecuta src/app.js.
Si ejecutas npm run dev, nodemon ejecuta src/app.js y se mantiene vigilando los cambios.
Servidor express, app.js utiliza el modulo express para crear un servidor web que escucha el puerto 3000.
Manejando las solicitudes: Cuando un usuario abre su navegador y navega a http://localhost:3000/, el servidor Express recibe la solicitud GET para la ruta raíz (/).
La ruta definida en app.js (app.get("/")) intercepta esta solicitud y en lugar de enviar una respuesta de texto, utiliza res.sendFile() para enviar el contenido del archivo index.html de vuelta al navegador.
El navegador recibe el index.html y lo renderiza, mostrando el título prediseñado en este caso "¡Hola Mundo desde Perú!".

Instalación de nodemon
nodemon es una dependencia de desarrollo (devDependencies), que significa que solo es necesaria durante la fase de desarrollo para mejorar el flujo de trabajo (reinicicar el servidor automaticamente) pero no es fundamental para que la aplicación funcione una vez desplegada en producción.

Comando de instalación

npm install nodemon --save-dev

# forma abreviada

npm i nodemon -D

Descarga el paquete nodemon y sus dependencias.
Coloca estos archivos en la carpeta node_modules.
Añade nodemon a la sección "devDependencies" de tu archivo package.json. El flag (modificador) --save-dev (o -D) es crucial para que npm sepa que es una dependencia de desarrollo.
Crea/Actualiza package-lock.json: registra la versión exacta

Instalación de express
express es una dependencia de producción (dependencies) que significa que la aplicación lo necesita para funcionar correctamente tanto en desarrollo como cuando la despliegues.

Comando de instalación

npm install express

# forma abreviada

npm i express

Descarga el paquete express y sus propias dependencias desde el registro de npm.
Coloca estos archivos en la carpeta node_modules dentro de tu proyecto.
Añade express a la sección "dependencies" de tu archivo package.json
Crea/Actualiza package-lock.json: Registra la versión exacta instalada de express y todas sus sub-dependencias en el archivo package-lock.json para asegurar instalaciones consistentes en el futuro.
