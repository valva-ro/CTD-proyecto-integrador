# Service

Acá vamos a tener que crear la clase `CategoriaService`. 

Pensando a futuro creo que convendría tener la interfaz 
`CRUDService` que defina los métodos CRUD con un generic. Luego la clase `CategoriaService` 
podría implementar la interfaz `CRUDService` pasándole a través del generic la clase `CategoriaDTO`.

La estructura de carpetas que propongo para eso es la siguiente:
```bash
.
├── impl
│   ├── CategoriaService.java
└── CRUDService.java
```