-- Booking database data
-- Version 1.0

-- Copyright (c) 2021 grupo 4 - Digital House. 
-- All rights reserved.

-- Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

--  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
--  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
--  * Neither the name of Oracle nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

-- THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

<<<<<<< HEAD
=======
USE booking;
>>>>>>> 33ebb16ecc24ab52d045978b3fa71829cc8171f8
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
SET AUTOCOMMIT=0;
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Capital Federal','Argentina',-34.6083, -58.3712);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('La Plata','Argentina',-34.9214,-57.9544);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Córdoba','Argentina',-31.417,-64.183);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Salta','Argentina',-24.7859,-65.4116);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Mendoza','Argentina',-32.8903,-68.8472);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Mar del Plata','Argentina',-38.0033,-57.5528);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Rosario','Argentina',-32.9468,-60.6393);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Bogotá','Colombia',4.6097,-74.0817);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Medellín','Colombia',6.217,-75.567);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Cali','Colombia',3.4372,-76.5225);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Cartagena','Colombia',10.3997,-75.5144);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('Barranquilla','Colombia',10.9685,-74.7813);
INSERT INTO ciudades (nombre, pais, latitud, longitud) VALUES ('San Carlos de Bariloche','Argentina',-41.1455,-71.3082);
COMMIT;

--
-- Dumping data for table `productos`
--
SET AUTOCOMMIT=0;
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Meliá","Complejos turísticos con servicio “todo incluido” para disfrutar de unas vacaciones de lujo, diseñados para mezclarse con su entorno natural en lugares muy exóticos donde disfrutar de una experiencia verdaderamente única.", 1, 2);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Palladium","La cadena hotelera Palladium Hotel Group nace a finales de los años 60 en Ibiza de la mano del empresario Abel Matutes Juan, con el sueño de acercar el paraíso a los viajeros y ofrecerles experiencias increíbles. Se propone diseñar los alojamientos más exclusivos donde el lujo, la calidad y el mejor servicio son los pilares principales. Sus primeros pasos fueron en las Islas Baleares y las Islas Canarias, a principios de los 90 continuó su aventura con la apertura de varios resorts en el Caribe. ", 1, 8);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("La Casa del Sol","Ubicado en las cercanías de la estación de metro Las Aguas, el apartamento Casa Del Sol Hostal ofrece un depósito de equipaje y un mostrador de información turística. El apartamento consta de una cocina compartida, un balcón y un baño privado. National University of Colombia está a una distancia de 5 km, mientras que Cascada La Chorrera está a 4.3 km. Se ubica en Bogotá, a 1 km del centro de la ciudad.", 3, 4);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Easy Start","Descubre por qué tantos viajeros ven Central Green Hotel como el hotel ideal cuando visitan Budapest. Además de aportar la combinación ideal de calidad, comodidad y ubicación, ofrece un ambiente económico con una amplia variedad de servicios diseñados para viajeros como tú.", 4, 4);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Hotel España","El Hotel España 4* está situado en la Calle Sant Pau, en pleno centro histórico de Barcelona, al lado de Las Ramblas, el Gran Teatre del Liceu, el mercado de La Boquería… y un sinfín de lugares de interés que hacen de Barcelona una de las ciudades más cosmopolitas de Europa.", 1, 1);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("La Surfería","LA SURFERÍA se encuentra a pie de la playa de La Concha en Suances Cantabria. ¿Imaginas despertar en un lugar en el que nada mas abrir los ojos tengas la sensación de poder tocar el mar? La Surfería te brinda la oportunidad de disfrutar de la sensación de poder rozar con los dedos de los pies la fina arena de las playas del Cantábrico desde el confort de sus habitaciones totalmente reformadas en el 2019. Nace de años de playa y olas, de festivales de músicas del mundo, de viajes surferos y comidas exóticas. Aunamos experiencia en hotelería, hostelería, tiendas de surf y escuelas de surf.", 2, 6);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Vivac Hostel","Hostel VIVAC se encuentra en el centro geográfico de la ciudad de Buenos Aires. Te garantizamos el menor costo de transporte a cualquier punto de ciudad y el menor tiempo promedio de traslados. Se trata de la zona más poblada y segura de la ciudad, con amplia disponibilidad de comercios, servicios y entretenimiento.", 2, 5);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Los Angelitos","Ubicado a 1 del centro de Federación, Apart Hotel Los Angelitos ofrece WiFi en las habitaciones. El albergue está a solo 250 metros de los Termas de Federación. El hotel ofrece 15 cuartos equipados con TV con múltiples canales, una cocina pequeña y un balcón. Los huéspedes disfrutarán de toallas de baño, toallas y un secador de pelo proporcionados en los baños. Con una variedad grande de platos, Ki Karu y el Puerto Sanchez están a 175 metros de la propiedad. El hotel está a 52 minutos en coche del Aeropuerto Concordia, que está situado a 60 km.", 3, 9);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Doña María","Ubicado en el centro de la ciudad de Ocaña, en medio de la zonas turísticas y de comercio, en una pintoresca casa se encuentra el contemporáneo Hotel Boutique Doña María con habitaciones que cuidan cada detalle para brindar calidez y tranquilidad.", 4, 11);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Dpto. en Bariloche","HABILITADO POR TURISMO. DAT DT 132/2018 Hermoso departamento con ubicación privilegiada, en un barrio tranquilo, con vista panorámica a Los Andes y al Lago Nahuel Huapi. A solo 5 minutos del centro de la ciudad y 20 minutos de las pistas de ski C.Catedral. Mi alojamiento es bueno para parejas aventureros, viajeros de negocios, familias con hijos y grupos grandes ya que con La Casa Andes View Temporario podemos alojar hasta 18 personas. Excelente calidad de construcción con madera local y diseño moderno.", 4, 13);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("El Enemigo","El mayor enemigo que tenemos las personas somos nosotros mismos. Esta es la esencia de Casa El Enemigo en Mendoza, Argentina. En su logotipo muestra la lucha de un hombre y un dragón como esencia de lo que hacemos todos cada día: luchar con nosotros mismos, con nuestros miedos y frustraciones, para tratar de alcanzar nuestros objetivos. Esta fue la idea con la que el enólogo Alejandro Vigil creó esta marca, y con la que se etiqueta uno de los mejores vinos de Argentina.", 3, 10);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Las Perdices","Complejo informal de cabañas con decoración cálida en las montañas con piscina al aire libre de temporada.", 2, 9);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Casa Petrini","Casa Petrini, es un proyecto enoturístico que integra Bodega, Alojamiento, Restaurant y Spa. Ubicado en el Valle de Uco, Tupungato, a tan solo 90 minutos de la ciudad de Mendoza, Argentina.", 2, 1);
INSERT INTO productos (nombre, descripcion, fk_categoria, fk_ciudad) VALUES ("Ana Bistró","Anna Bistro es un paraíso en la ciudad, un lugar que recuerda al propio hogar. Desestructurado y relajado, al encontrarse en medio de un gran jardín logra que los espacios interiores y exteriores interactúen constantemente. Este lugar no posee la formalidad de un clásico restaurante ya que dentro de un mismo lugar es posible encontrar una opción para el desayuno y cafetería abastecida con excelente pastelería propia, petites dejeuners y american breakfast cuyas cartas se complementan con coisantes, facturas, tostados, jugos, huevos, yogur con ensalada de frutas, frutas secas y miel que complementan la propuesta matutina.", 3, 8);
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

SET AUTOCOMMIT=0;
INSERT INTO tipo_politica (nombre) VALUES ("Normas de la casa");
INSERT INTO tipo_politica (nombre) VALUES ("Salud y seguridad");
INSERT INTO tipo_politica (nombre) VALUES ("Política de cancelación");
COMMIT;


--
-- Dumping data for table `politica`
--
SET AUTOCOMMIT=0;
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Check-in: 10:00",1);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Check-out: 20:00",1);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Dejar organizado antes de salir",1);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("No se permiten fiestas",1);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("No fumar",1);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("No se permiten mascotas",1);

INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus",2);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Detector de humo",2);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Deposito de seguridad",2);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Usar mascarilla en los pasillos",2);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Enfermeria en la primera planta",2);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Puertas con seguro de contraseña",2);

INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",3);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Cancelación con almenos 48 horas de anticipación",3);
INSERT INTO politicas (nombre,fk_tipo_politica) VALUES ("Añadir documentación relacionada con la reservación en el momento de la solicitud",3);
COMMIT;

--
-- Dumping data for table `politica_producto` 
--
SET AUTOCOMMIT=0;
INSERT INTO politica_producto (politica_id,producto_id) VALUES (1,1);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (3,1);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (5,1);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (7,1);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (9,1);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (11,1);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (13,1);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (2,2);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (4,2);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (6,2);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (8,2);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (10,2);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (12,2);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (14,2);



INSERT INTO politica_producto (politica_id,producto_id) VALUES (1,3);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (3,3);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (5,3);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (7,3);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (9,3);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (11,3);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (15,3);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (2,4);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (4,4);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (6,4);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (8,4);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (10,4);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (12,4);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (13,4);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (1,5);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (3,5);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (5,5);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (7,5);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (9,5);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (11,5);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (14,5);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (2,6);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (4,6);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (6,6);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (8,6);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (10,6);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (12,6);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (15,6);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (1,7);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (3,7);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (5,7);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (7,7);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (9,7);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (11,7);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (13,7);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (2,8);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (4,8);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (6,8);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (8,8);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (10,8);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (12,8);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (14,8);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (1,9);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (3,9);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (5,9);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (7,9);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (9,9);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (11,9);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (15,9);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (2,10);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (4,10);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (6,10);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (8,10);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (10,10);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (12,10);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (13,10);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (1,11);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (3,11);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (5,11);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (7,11);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (9,11);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (11,11);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (14,11);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (2,12);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (4,12);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (6,12);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (8,12);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (10,12);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (12,12);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (15,12);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (1,13);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (3,13);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (5,13);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (7,13);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (9,13);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (11,13);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (13,13);


INSERT INTO politica_producto (politica_id,producto_id) VALUES (2,14);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (4,14);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (6,14);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (8,14);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (10,14);
INSERT INTO politica_producto (politica_id,producto_id) VALUES (12,14);

INSERT INTO politica_producto (politica_id,producto_id) VALUES (14,14);



--
-- Dumping data for table `usuarios`
--
SET AUTOCOMMIT=0;
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada) VALUES ("Pepe", "Pepardo", "pepe@gmail.com", "pepe1234", FALSE);
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada) VALUES ("José", "Gómez", "jose@gmail.com", "jose1234", FALSE);
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada) VALUES ("Josefina", "Gómez", "josefina@gmail.com", "josefina1234", FALSE);
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