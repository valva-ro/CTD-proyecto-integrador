# Ejecución de scripts

1. El `schema.sql` para crear el esquema y las tablas
2. Los `data_X.sql` en el siguiente orden
    1. Ciudades
    2. Categorias
    3. Roles
    4. Productos (necesita Ciudades y Categorias)
    5. Características (necesita Productos)
    6. Imagenes (necesita Productos)
    7. Politicas (necesita Productos)
    8. Roles
    8. Usuarios (necesita Productos y Roles)
    9. Puntuaciones (necesita Productos y Usuarios)

# Aclaraciones
- Cada vez que se ejecuta el `schema.sql` se hace un `DROP` y se recrea todo
- Cada vez que se ejecuta un `data_X.sql` se hace un `DELETE` y se vuelven a insertar todos los datos