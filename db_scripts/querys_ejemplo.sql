select * from imagenes
inner join productos on fk_producto = producto_id
inner join ciudades on fk_ciudad = ciudad_id;

select * from imagenes;

select * from productos
inner join producto_caracteristica on producto_caracteristica.producto_id = productos.producto_id
inner join caracteristicas on producto_caracteristica.caracteristica_id = caracteristicas.caracteristica_id
order by productos.nombre;

select * from roles;
select * from usuarios;