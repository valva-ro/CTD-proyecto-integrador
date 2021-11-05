-- Booking database data
-- Version 1.0

-- Copyright (c) 2021 grupo 4 - Digital House. 
-- All rights reserved.

-- Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

--  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
--  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
--  * Neither the name of Oracle nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

-- THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

USE booking;

--
-- Dumping data for table `categorias`
--
SET AUTOCOMMIT=0;
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Hoteles","807.105 hoteles","https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Hostels","807.105 hostels","https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Bed & Breakfasts","807.105 B&B's","https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Departamentos","807.105 departamentos","https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1");
COMMIT;

--
-- Dumping data for table `ciudades`
--
INSERT INTO ciudades (nombre, pais) VALUES ('Capital Federal','Argentina');
INSERT INTO ciudades (nombre, pais) VALUES ('La Plata','Argentina');
INSERT INTO ciudades (nombre, pais) VALUES ('Córdoba','Argentina');
INSERT INTO ciudades (nombre, pais) VALUES ('Salta','Argentina');
INSERT INTO ciudades (nombre, pais) VALUES ('Mendoza','Argentina');
INSERT INTO ciudades (nombre, pais) VALUES ('Mar del Plata','Argentina');
INSERT INTO ciudades (nombre, pais) VALUES ('Rosario','Argentina');
INSERT INTO ciudades (nombre, pais) VALUES ('Bogotá','Colombia');
INSERT INTO ciudades (nombre, pais) VALUES ('Medellín','Colombia');
INSERT INTO ciudades (nombre, pais) VALUES ('Cali','Colombia');
INSERT INTO ciudades (nombre, pais) VALUES ('Cartagena','Colombia');
INSERT INTO ciudades (nombre, pais) VALUES ('Barranquilla','Colombia');
COMMIT;

--
-- Dumping data for table `imagenes`
--
SET AUTOCOMMIT=0;
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-doble-catalonia-620x412.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://www.mountainhosteltarter.com/wp-content/uploads/2017/09/mountain-hostel-tarter-andorra-kitchen-8.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://www.revista80dias.es/images/2014/12/roca-nivaria-bano-suite.jpg",2);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","http://descubrirturismo.com/wp-content/uploads/2018/10/Hilton-Spa-2.jpg",4);
COMMIT;

--
-- Dumping data for table `caracteristicas`
--
SET AUTOCOMMIT=0;
INSERT INTO caracteristicas (nombre, icono) VALUES ("Wifi","<i class='bx bx-wifi' ></i>");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Parqueadero","<i class='bx bxs-car'></i>");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Piscina","<i class='bx bx-swim'></i>");
COMMIT;

--
-- Dumping data for table `productos`
--
SET AUTOCOMMIT=0;
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Habitación Luxury 1","Habitación de lujo", 1, 1);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Habitación Luxury 2","Habitación de lujo", 1, 1);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Habitación Luxury 3","Habitación de lujo", 1, 4);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Departamento Pequeño","Departamento unipersonal", 4, 4);
COMMIT;

--
-- Dumping data for table `producto_caracteristica`
--
SET AUTOCOMMIT=0;
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (4,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (4,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (4,3);
COMMIT;