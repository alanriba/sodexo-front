# Plataforma de Noticias

Este proyecto consiste en el desarrollo de una plataforma de noticias que permite a los usuarios ver y buscar noticias. Los usuarios también pueden guardar noticias en sus favoritos para acceder a ellas más tarde. La plataforma se compone de una interfaz web de una sola página (SPA) desarrollada con Angular y un microservicio.

## Características

- Interfaz web SPA desarrollada con Angular 15 y PrimeNG.
- Página de inicio que muestra las noticias más recientes en una lista ordenada por fecha.
- Cada noticia muestra su título, descripción, resumen y fecha de publicación.
- Funcionalidades de paginación, ordenamiento y búsqueda en la página de inicio.
- Opción para agregar noticias a la lista de favoritos.
- Página de favoritos que muestra las noticias guardadas por el usuario.
- Funcionalidades de paginación, filtrado y ordenamiento en la página de favoritos.
- Visualización de la fecha en que se guardó cada noticia en la página de favoritos.
- Integración con el API de noticias [SpaceFlight News API](https://api.spaceflightnewsapi.net/v4/articles).
- Uso de un API propio para guardar y obtener el listado de favoritos.
- Diseño de la interfaz de usuario personalizable.

## Instalación

1. Clona el repositorio en tu máquina local.
2. Accede al directorio del proyecto: `cd plataforma-de-noticias`.
3. Instala las dependencias utilizando el gestor de paquetes npm: `npm install`.

## Uso

1. Inicia la interfaz web SPA: `npm start`.
2. Accede a la plataforma de noticias en tu navegador: `http://localhost:4200`.

## Pruebas

Para ejecutar las pruebas unitarias de los componentes desarrollados, utiliza el siguiente comando:


## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realiza tus cambios y pruebas.
4. Asegúrate de que las pruebas pasen correctamente.
5. Realiza un commit de tus cambios: `git commit -m "Agregar nueva funcionalidad"`.
6. Haz push a la rama: `git push origin nueva-funcionalidad`.
7. Crea un nuevo pull request en GitHub.

## Autor

[Nombre del autor]

## Licencia

Este proyecto se encuentra bajo la [licencia MIT](LICENSE).
