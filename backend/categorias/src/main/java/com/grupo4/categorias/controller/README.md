# Controller

Acá vamos a tener que crear la clase `CategoriaController`. 

Pensando a futuro creo que convendría tener la interfaz 
`CRUDController` que defina los métodos CRUD con un generic. Luego la clase `CategoriaController` 
podría implementar la interfaz `CRUDController` pasándole a través del generic la clase `CategoriaDTO`.

La estructura de carpetas que propongo para eso es la siguiente:
```bash
.
├── impl
│   ├── CategoriaController.java
└── CRUDController.java
```