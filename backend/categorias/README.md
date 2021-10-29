# API Rest Categorias

## Requerimientos

- [Java 11](https://www.oracle.com/java/technologies/downloads/#java11)
- [Maven](https://maven.apache.org/download.cgi).
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/general-installation-issues.html)
- [Workbench](https://dev.mysql.com/downloads/workbench/)

## Instalación

1. Clonar el proyecto
    ```bash
   git clone https://gitlab.com/proyecto-integrador-0321/camada-3/grupo-4.git
    ```
   
2. Desde workbench 
   1. Correr el script `../db_scripts/db_scripts.sql` para crear el schema y la tabla categorias
   2. Correr el script `../db_scripts/db_data.sql` para insertar algunos datos

3. Cambiar el usuario y contraseña para que coincida con los configurados en el workbench
   1. Abrir el archivo `src/main/resources/application.properties`
   2. Configurar la información en las líneas `spring.datasource.username` y `spring.datasource.password`

4. Correr la aplicación. Esto se puede hacer desde un IDE o desde la terminal con el comando `mvn spring-boot:run`.

## Documentación

Una vez que la aplicación esté corriendo se puede visualizar la documentación completa de la API con JSONs de ejemplo en 
[http://localhost:8080/swagger-ui/](http://localhost:8080/swagger-ui/).

![Swagger UI](./img/swagger.png)

| Método | Endpoint | Descripción |
| ------ | -------- | ----------- | 
| GET    | `/categorias/todas` | Obtiene un array con todas las categorias | 
| GET    | `/categorias/{id}`  | Busca una categoría por ID | 
| POST   | `/categorias/crear` | Agrega una nueva categoría |
| PUT    | `/categorias/actualizar` | Actualiza una categoría existente | 
| DELETE | `/categorias/eliminar/{id}` | Elimina una categoría existente por ID |