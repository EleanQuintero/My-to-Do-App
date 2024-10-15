# My ToDo App

Este proyecto es una aplicación de lista de tareas desarrollada con React, TypeScript y Vite. 

## Descripción

La aplicación permite a los usuarios crear, editar y eliminar tareas. El propósito del proyecto es demostrar un ejemplo básico de cómo se puede integrar React con TypeScript usando Vite para un desarrollo eficiente y rápido.

## Tecnologías Utilizadas

- **React**: Biblioteca para la construcción de interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de desarrollo que ofrece un entorno más rápido y moderno.
- **ESLint**: Herramienta para garantizar la calidad del código.
- **SWC o Babel**: Utilizado para Fast Refresh durante el desarrollo.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio.
   ```bash
   git clone https://github.com/EleanQuintero/My-to-Do-App

Navega al directorio del proyecto.


cd my-todo-app
Instala las dependencias.


npm install

## Scripts Disponibles
Dentro del directorio del proyecto, puedes ejecutar:

npm run dev: Corre la aplicación en modo desarrollo utilizando Vite.

npm run build: Construye la aplicación para producción.

npm run serve: Sirve la aplicación construida localmente.

npm run lint: Linter para encontrar y arreglar problemas de estilo y errores.

## Configuración de ESLint
Si deseas desarrollar una aplicación para producción, se recomienda expandir la configuración de ESLint para habilitar reglas de linting basadas en el tipo:

Asegúrate de configurar parserOptions correctamente en el archivo de configuración.

Considera usar tseslint.configs.recommendedTypeChecked o tseslint.configs.strictTypeChecked.

Instala y configura eslint-plugin-react para habilitar reglas específicas de React.


## Funciones Principales

La aplicación My ToDo App incluye las siguientes funciones clave:

1. **Agregar Tarea**
   - Proporciona una interfaz para añadir nuevas tareas a la lista con detalles como el título

2. **Editar Tarea**
   - Permite modificar la información de una tarea existente, incluyendo su título y descripción

3. **Eliminar Tarea**
   - Opción para eliminar una tarea no deseada

4. **Marcar Tarea como Completa**
   - Permite marcar tareas como completadas, ayudando a los usuarios a seguir su progreso.

5. **Filtrar y Buscar Tareas (Aun no disponible)**
   - Los usuarios pueden buscar tareas específicas o filtrar las tareas por estado, fecha o prioridad.

Contribución
Si deseas contribuir a este proyecto, por favor crea un fork del repositorio y envía un pull request con tus mejoras.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más información, consulta el archivo LICENSE.