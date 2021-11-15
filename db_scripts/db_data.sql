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
select * from productos;
--
-- Dumping data for table `categorias`
--
SET AUTOCOMMIT=0;
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Hoteles","807.105 hoteles","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Hoteles.jfif");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Hostels","807.105 hostels","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Hostels.jfif");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Bed & Breakfasts","807.105 B&B's","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Bed+%26+Breakfasts.jfif");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Departamentos","807.105 departamentos","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Departamentos.jfif");
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
INSERT INTO ciudades (nombre, pais) VALUES ('San Carlos de Bariloche','Argentina');
COMMIT;

--
-- Dumping data for table `productos`
--
SET AUTOCOMMIT=0;
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Meliá","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 1, 2);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Palladium","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 1, 8);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("La Casa del Sol","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 3, 4);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Easy Start","Departamento unipersonal", 4, 4);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Hotel España","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 1, 1);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("La Surfería","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 2, 6);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Vivac Hostel","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 2, 5);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Los Angelitos","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 3, 9);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Doña María","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 4, 11);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Dpto. en Bariloche","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 4, 13);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("El Enemigo","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 3, 10);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Las Perdices","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 2, 9);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Casa Petrini","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 2, 1);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Ana Bistró","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima illum omnis suscipit vel laborum commodi provident eveniet harum voluptatem quam cumque, nam maiores?", 3, 8);
COMMIT;

--
-- Dumping data for table `imagenes`
--
SET AUTOCOMMIT=0;
-- Producto 1
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto1.jpg",1);
-- Producto 2
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",2);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",2);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",2);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",2);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",2);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",2);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto2.jpg",2);
-- Producto 3
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",3);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",1);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",3);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",3);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",3);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",3);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto3.jpg",3);
-- Producto 4
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",4);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",4);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",4);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",4);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",4);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",4);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto4.jpg",4);
-- Producto 5
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",5);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",5);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",5);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",5);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",5);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",5);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto5.jpg",5);
-- Producto 6
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",6);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",6);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",6);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",6);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",6);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://www.mountainhosteltarter.com/wp-content/uploads/2017/09/mountain-hostel-tarter-andorra-kitchen-8.jpg",6);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto6.jpg",6);
-- Producto 7
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",7);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",7);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",7);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",7);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",7);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",7);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto7.jpg",7);
-- Producto 8
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",8);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",8);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",8);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",8);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",8);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",8);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto8.jpg",8);
-- Producto 9
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",9);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",9);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",9);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",9);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",9);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",9);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto9.jpg",9);
-- Producto 10
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",10);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",10);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",10);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",10);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",10);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",10);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto10.jpg",10);
-- Producto 11
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",11);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",11);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",11);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",11);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",11);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",11);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto11.jpg",11);
-- Producto 12
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",12);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",12);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",12);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",12);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",12);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",12);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto12.jpg",12);
-- Producto 13
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",13);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",13);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",13);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",13);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",13);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",13);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto13.jpg",13);
-- Producto 14
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion.jpg",14);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Baño","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg",14);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Cocina","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/cocina.jpg",14);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Pileta","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Pileta.jpg",14);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",14);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Habitación","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/Habitacion1.jpg",14);
INSERT INTO imagenes (imagen_titulo, imagen_URL, fk_producto) VALUES ("Principal","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto14.jpg",14);


COMMIT;

--
-- Dumping data for table `caracteristicas`
--
SET AUTOCOMMIT=0;
INSERT INTO caracteristicas (nombre, icono) VALUES ("Wifi","fas fa-wifi");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Piscina","fas fa-swimmer");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Estacionamiento gratuito","fas fa-car");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Aire acondicionado","fas fa-snowflake");
INSERT INTO caracteristicas (nombre, icono) VALUES ("No fumador","fas fa-smoking-ban");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Televisor","fas fa-tv");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Apto para mascotas","fas fa-paw");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Barra libre","fas fa-cocktail");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Tarjeta de crédito","fas fa-credit-card");
INSERT INTO caracteristicas (nombre, icono) VALUES ("Check-in","fas fa-clock");
COMMIT;

--
-- Dumping data for table `producto_caracteristica`
--
SET AUTOCOMMIT=0;
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,4);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,5);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,6);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,7);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,8);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (2,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (2,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (2,4);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,4);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (4,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (4,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (5,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (5,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (6,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (6,4);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (7,5);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (7,6);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (8,7);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (8,8);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (9,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (9,10);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (10,9);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (10,10);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (11,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (11,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (12,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (12,6);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (13,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (13,8);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (13,4);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (14,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (14,10);
COMMIT;

--
-- Dumping data for table `usuarios`
--
SET AUTOCOMMIT=0;
INSERT INTO usuarios (nombre, apellido, mail, contrasenia) VALUES ("Pepe", "Pepardo", "pepe@gmail.com", "pepe1234");
INSERT INTO usuarios (nombre, apellido, mail, contrasenia) VALUES ("José", "Gómez", "jose@gmail.com", "jose1234");
INSERT INTO usuarios (nombre, apellido, mail, contrasenia) VALUES ("Josefina", "Gómez", "josefina@gmail.com", "josefina1234");
COMMIT;

--
-- Dumping data for table `usuario_producto`
--
SET AUTOCOMMIT=0;
-- Usuario 1
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (1, 1);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (1, 2);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (1, 4);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (1, 5);
-- Usuario 2
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (2, 3);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (2, 5);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (2, 6);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (2, 4);
-- Usuario 3
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (3, 1);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (3, 3);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (3, 5);
INSERT INTO usuario_producto (usuario_id, producto_id) VALUES (3, 6);
COMMIT;