# API Rest Categorias

## Requerimientos

- [Java 11](https://www.oracle.com/java/technologies/downloads/#java11)
- [Maven](https://maven.apache.org/download.cgi).
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/general-installation-issues.html)
- [Workbench](https://dev.mysql.com/downloads/workbench/)

## Instalación

1. Clonar el proyecto

   ```shell
    git clone https://gitlab.com/proyecto-integrador-0321/camada-3/grupo-4.git
   ```


2. Desde workbench
   1. Crear una nueva conexión:
      - Hostname: `localhost`
      - Port: `3306`
      - Username: `root`
      - Password: `root`
   2. Abrir y ejecutar el script `../db_scripts/script_develop.sql` que va a crear los schemas e insertar datos en la BD


3. Correr el backend con el perfil `develop`
   1. Desde la terminal pararse en la carpeta `/grupo-4/backend/HostingBook`
   2. Ejecutar el comando `mvn spring-boot:run -Dspring-boot.run.profiles=develop`

## Documentación

Una vez que la aplicación esté corriendo se puede visualizar la documentación completa de la API con JSONs de ejemplo en 
[http://localhost:8080/swagger-ui/](http://localhost:8080/swagger-ui/).

![Swagger UI](./img/swagger.png)
