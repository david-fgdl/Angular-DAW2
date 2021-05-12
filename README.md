# Angular-DAW2
Proyecto de Angular para DAW2. Las dos tareas correspondientes a Angular se unifican en un solo proyecto.
Esta aplicación consiste en una ToDo-List sencilla. Cada tarea tiene tres posibles estados: Pendiente, Proceso, Terminado y una categoria obligatoria.

# Acceso a la aplicación desplegada

[Angular-DAW2](https://angulardawii.web.app/)

# Base de datos

La aplicación utiliza Firestore como base de datos, guardando las tareas y categorías en colecciones.

# Ejecución en local

La ejecución en local se realiza ejecutando la orden: 'ng serve' desde la carpeta de la aplicación.

Para visualizarlo se abre el navegador en la dirección 'http://localhost:4200/' donde se ejecuta la apliación en tiempo real.

# Host

 Para hostear nuevos cambios simplemente ejecuta las siguientes ordenes
      `ng build`
      `firebase deploy`
      
      
  *La primera orden crea una versión optimizada de la aplicación.*
  
  
  *Recuerda que para ejecutar firebase deploy debes tener instalado `firebase-tools`. Además, si es la primera vez que lo ejecutas antes debes iniciar sesión y ejecutar la orden `firebase init`. Siguiendo el siguiente enlace: [Deploy angular firebase](https://codigofacilito.com/articulos/deploy-angular-firebase) tienes explicado con detalle como hostear una aplicación de angular en firebase por primera vez.*

# Archivos

Todos los componentes creados y desarrollados en esta aplicación se encuentran dentro del directorio `src/app`, de forma específica:

  - **app-routing.module.ts**: Especificación de las rutas para los componentes.
  - **app.component.html**: Carga de la barra de navegación y las rutas definidas en el modulo anterior con <router-oulet></router-oulet>.
  - **all-task**: Contiene la tabla donde se cargan las distintas tareas. La tabla se crea con angular material "Table" ordenada automáticamente y con "Radio button" se escoge la categoría a mostrar.
  - **categories**: Componente con el que se muestra, crea, edita y borran categorías.
  - **create-task**:  Componente para la creación de nuevas tareas.
  - **form**: Vista del formulario para la edición de las tareas existentes. Utiliza angular material "Form-field" y "Selection-list".
  - **materials**: Componente para la carga de imports necesarios de angular material.
  - **my-nav**: Componente que añade la barra de navegación a la aplicación.
  - **services**: Componente con el que se definen los métodos para el acceso y modificación de las colecciones de la base de datos de Firebase.

Dentro del directorio `src/enviroment.ts` se rellena la información utilizada en la conexión del proyecto con la base de datos.
Dentro del directorio `src/models` se declaran dos interfaces, una para tareas y otra las categorías, que sirven de apoyo en la gestión y manejo de los datos entre la aplicación y la base de datos.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11

Este proyecto esta basado en el siguiente tutorial [Angular firebase CRUD y Angular material](https://www.youtube.com/watch?v=JEnLqlsEAbw&ab_channel=DominiCode).
