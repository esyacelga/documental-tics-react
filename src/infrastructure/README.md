# Carpeta Infrastructure

La carpeta `infrastructure` dentro de este proyecto tiene como objetivo contener los aspectos relacionados con la infraestructura de la aplicación, incluyendo la configuración de la interfaz de usuario, el manejo del estado global y otros detalles de implementación.

## Contenido

### `ui/`

La subcarpeta `ui/` alberga los componentes de interfaz de usuario de React. Aquí se encuentran todos los componentes reutilizables, contenedores, y cualquier otro elemento de la interfaz de usuario que pueda ser utilizado en múltiples partes de la aplicación.

### `config/`

La carpeta `config/` contiene archivos de configuración de la aplicación, como:

- **Routing:** Archivos que manejan el enrutamiento de la aplicación utilizando bibliotecas como React Router.
- **Estado global:** Configuración del estado global de la aplicación con herramientas como Redux o contextos de React, donde se encuentra el archivo `store.js` en el caso de Redux.
- **Configuraciones diversas:** Archivos de configuración adicionales, por ejemplo, para la integración con servicios externos, configuraciones de entorno, entre otros.

## Ejemplo de Estructura de Carpetas

```plaintext
/src
  /api
    /services
    /dataAccess
  
  /application
    /useCases
  
  /domain
    /models
    /repositories
  
  /infrastructure
    /ui
      /components
      /containers
      /...
    /config
      /routing
        routes.js
      store.js
      /otherConfigs
        externalServices.js
