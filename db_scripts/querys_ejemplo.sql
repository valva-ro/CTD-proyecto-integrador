select * from imagenes
inner join productos on fk_producto = producto_id
inner join ciudades on fk_ciudad = ciudad_id;

select * from imagenes;

select * from booking.productos
inner join producto_caracteristica on producto_caracteristica.producto_id = productos.producto_id
inner join caracteristicas on producto_caracteristica.caracteristica_id = caracteristicas.caracteristica_id
order by productos.nombre;

select * from productos
inner join politicas;

select * from booking.productos
inner join politica_producto on productos.producto_id = politica_producto.producto_id
inner join politicas on politica_producto.politica_id = politicas.politica_id
order by productos.nombre;


select * from politicas
inner join tipo_politica on politicas.fk_tipo_politica = tipo_politica.tipo_politica_id;

select * from tipo_politica;

select * from roles;
select * from usuarios;

select * from reservas;