SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';
SET AUTOCOMMIT=0;

DROP SCHEMA IF EXISTS booking;
CREATE SCHEMA IF NOT EXISTS booking;
USE booking;

--
-- Table structure for table `ciudades`
--
CREATE TABLE IF NOT EXISTS ciudades (
  ciudad_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  pais VARCHAR(50) NOT NULL,
  latitud DOUBLE(7,4) NOT NULL,
  longitud DOUBLE(7,4) NOT NULL,
  PRIMARY KEY (ciudad_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `categorias`
--
CREATE TABLE IF NOT EXISTS categorias (
  categoria_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  descripcion VARCHAR(50) NOT NULL,
  URL_imagen TEXT NOT NULL,
  PRIMARY KEY (categoria_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `productos`
--
CREATE TABLE IF NOT EXISTS productos (
	producto_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
	horario_check_in INT UNSIGNED NOT NULL,
    fk_categoria SMALLINT UNSIGNED NOT NULL,
    fk_ciudad INT UNSIGNED NOT NULL,
    PRIMARY KEY  (producto_id),
  CONSTRAINT categorias
		FOREIGN KEY (fk_categoria)
		REFERENCES booking.categorias (categoria_id),
	CONSTRAINT ciudades
		FOREIGN KEY (fk_ciudad)
		REFERENCES booking.ciudades (ciudad_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `caracteristicas`
--
CREATE TABLE IF NOT EXISTS caracteristicas (
  caracteristica_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  icono TEXT NOT NULL,
  PRIMARY KEY (caracteristica_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `producto_caracteristica`
--
CREATE TABLE IF NOT EXISTS producto_caracteristica (
	producto_caracteristica_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    producto_id INT UNSIGNED NOT NULL,
    caracteristica_id INT UNSIGNED NOT NULL,
    PRIMARY KEY  (producto_caracteristica_id),
  CONSTRAINT producto_caracteristica_producto_id_foreign
		FOREIGN KEY (producto_id)
		REFERENCES booking.productos (producto_id),
	CONSTRAINT producto_caracteristica_caracteristica_id_foreign
		FOREIGN KEY (caracteristica_id)
		REFERENCES booking.caracteristicas (caracteristica_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `imagenes`
--
CREATE TABLE IF NOT EXISTS imagenes (
  imagen_id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT "id de la tabla imagenes", 
  imagen_titulo VARCHAR(50) NOT NULL  COMMENT "titulo de la imagen",
  imagen_URL TEXT NOT NULL COMMENT "url de la imagen",
  fk_producto INT UNSIGNED NOT NULL,
  PRIMARY KEY (imagen_id),
  CONSTRAINT productos
		FOREIGN KEY (fk_producto)
		REFERENCES booking.productos (producto_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `tipo_politica`
--
CREATE TABLE tipo_politica(
	tipo_politica_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY  (tipo_politica_id)    
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `politica`
--
CREATE TABLE politicas(
	  politica_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    fk_tipo_politica SMALLINT UNSIGNED NOT NULL,
	PRIMARY KEY  (politica_id), 
	CONSTRAINT politica_tipo_politica_id_foreign
		FOREIGN KEY (fk_tipo_politica)
		REFERENCES booking.tipo_politica (tipo_politica_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `politica_producto`
-- DROP TABLE IF EXISTS  politica_producto;
CREATE TABLE politica_producto(
	politica_producto_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    politica_id INT UNSIGNED NOT NULL,
    producto_id INT UNSIGNED NOT NULL,
    PRIMARY KEY  (politica_producto_id), 
	CONSTRAINT politica_producto_politica_id_foreign
		FOREIGN KEY (politica_id)
        REFERENCES booking.politicas (politica_id),
	CONSTRAINT politica_producto_producto_id_foreign
		FOREIGN KEY (producto_id)
		REFERENCES booking.productos (producto_id)

	
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `roles`
--
CREATE TABLE IF NOT EXISTS roles (
	rol_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  rol_nombre VARCHAR(50) NOT NULL,
  PRIMARY KEY  (rol_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `usuario`
--
CREATE TABLE IF NOT EXISTS usuarios (
  usuario_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  mail VARCHAR(100) NOT NULL,
  contrasenia VARCHAR(100) NOT NULL,
  cuenta_validada BOOLEAN NOT NULL,
  fk_rol INT UNSIGNED NOT NULL,
  PRIMARY KEY  (usuario_id),
  CONSTRAINT usuario_rol_id_foreign
	FOREIGN KEY (fk_rol)
	REFERENCES booking.roles (rol_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `producto`
--
CREATE TABLE IF NOT EXISTS usuario_producto (
	usuario_producto_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL,
    producto_id INT UNSIGNED NOT NULL,
    PRIMARY KEY  (usuario_producto_id),
  CONSTRAINT usuario_producto_id_foreign
		FOREIGN KEY (usuario_id)
		REFERENCES booking.usuarios (usuario_id),
	CONSTRAINT producto_usuario_id_foreign
		FOREIGN KEY (producto_id)
		REFERENCES booking.productos (producto_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `puntuaciones`
--
CREATE TABLE IF NOT EXISTS puntuaciones (
  puntuacion_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  puntuacion INT UNSIGNED NOT NULL,
  fk_producto INT UNSIGNED NOT NULL,
  fk_usuario INT UNSIGNED NOT NULL,
  PRIMARY KEY  (puntuacion_id),
  CONSTRAINT producto_puntuacion
		FOREIGN KEY (fk_producto)
		REFERENCES booking.productos (producto_id),
  CONSTRAINT usuario_puntuacion
		FOREIGN KEY (fk_usuario)
		REFERENCES booking.usuarios (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `reservas`
-- DROP TABLE IF EXISTS reservas;
CREATE TABLE IF NOT EXISTS reservas (
  reserva_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  mail VARCHAR(100) NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  hora_entrada INT NOT NULL,
  fecha_ingreso DATE NOT NULL,
  fecha_egreso DATE NOT NULL,
  datos TEXT COMMENT "datos para el vendedor",
  vacuna_covid BOOLEAN NOT NULL,
  fk_producto INT UNSIGNED NOT NULL,
  fk_usuario INT UNSIGNED NOT NULL,
  PRIMARY KEY  (reserva_id),
  CONSTRAINT reserva_producto_id_foreign
		FOREIGN KEY (fk_producto)
		REFERENCES booking.productos (producto_id),
  CONSTRAINT reserva_usuario_id_foreign
		FOREIGN KEY (fk_usuario)
		REFERENCES booking.usuarios (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- ----------------- TABLES -----------------
USE booking;
--
-- Dumping data for table `ciudades`
--
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
-- Dumping data for table `categorias`
--
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Hoteles","807.105 hoteles","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Hoteles.jfif");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Hostels","807.105 hostels","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Hostels.jfif");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Bed & Breakfasts","807.105 B&B's","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Bed+%26+Breakfasts.jfif");
INSERT INTO categorias (titulo, descripcion, URL_imagen) VALUES ("Departamentos","807.105 departamentos","https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Departamentos.jfif");
COMMIT;

--
-- Dumping data for table `productos`
--
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Meliá",
	"Complejos turísticos con servicio “todo incluido” para disfrutar de unas vacaciones de lujo, diseñados para mezclarse con su entorno natural en lugares muy exóticos donde disfrutar de una experiencia verdaderamente única.", 
    "Av. 51 715", 12, 1, 2);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Palladium",
	"La cadena hotelera Palladium Hotel Group nace a finales de los años 60 en Ibiza de la mano del empresario Abel Matutes Juan, con el sueño de acercar el paraíso a los viajeros y ofrecerles experiencias increíbles. Se propone diseñar los alojamientos más exclusivos donde el lujo, la calidad y el mejor servicio son los pilares principales. Sus primeros pasos fueron en las Islas Baleares y las Islas Canarias, a principios de los 90 continuó su aventura con la apertura de varios resorts en el Caribe. ", 
    "Cl. 74d #70a-2", 14, 1, 8);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"La Casa del Sol",
	"Ubicado en las cercanías de la estación de metro Las Aguas, el apartamento Casa Del Sol Hostal ofrece un depósito de equipaje y un mostrador de información turística. El apartamento consta de una cocina compartida, un balcón y un baño privado. National University of Colombia está a una distancia de 5 km, mientras que Cascada La Chorrera está a 4.3 km. Se ubica en Bogotá, a 1 km del centro de la ciudad.", 
    "Santa Fe 525", 16, 3, 4);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Easy Start",
	"Descubre por qué tantos viajeros ven Central Green Hotel como el hotel ideal cuando visitan Budapest. Además de aportar la combinación ideal de calidad, comodidad y ubicación, ofrece un ambiente económico con una amplia variedad de servicios diseñados para viajeros como tú.", 
    "Santiago Cabral 989", 13, 4, 4);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Hotel España",
	"El Hotel España 4* está situado en la Calle Sant Pau, en pleno centro histórico de Barcelona, al lado de Las Ramblas, el Gran Teatre del Liceu, el mercado de La Boquería… y un sinfín de lugares de interés que hacen de Barcelona una de las ciudades más cosmopolitas de Europa.", 
    "Tacuarí 80", 13, 1, 1);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"La Surfería",
	"La Surfería se encuentra a pie de la playa de La Concha en Suances Cantabria. ¿Imaginas despertar en un lugar en el que nada mas abrir los ojos tengas la sensación de poder tocar el mar? La Surfería te brinda la oportunidad de disfrutar de la sensación de poder rozar con los dedos de los pies la fina arena de las playas del Cantábrico desde el confort de sus habitaciones totalmente reformadas en el 2019. Nace de años de playa y olas, de festivales de músicas del mundo, de viajes surferos y comidas exóticas. Aunamos experiencia en hotelería, hostelería, tiendas de surf y escuelas de surf.", 
    "Alvarado 3687", 12, 2, 6);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Vivac Hostel",
	"Hostel VIVAC se encuentra en el centro geográfico de la ciudad de Buenos Aires. Te garantizamos el menor costo de transporte a cualquier punto de ciudad y el menor tiempo promedio de traslados. Se trata de la zona más poblada y segura de la ciudad, con amplia disponibilidad de comercios, servicios y entretenimiento.", 
    "Av. Hipólito Yrigoyen 4109", 12, 2, 5);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Los Angelitos",
	"Ubicado a 100m del centro de Federación, Apart Hotel Los Angelitos ofrece WiFi en las habitaciones. El albergue está a solo 250 metros de los Termas de Federación. El hotel ofrece 15 cuartos equipados con TV con múltiples canales, una cocina pequeña y un balcón. Los huéspedes disfrutarán de toallas de baño, toallas y un secador de pelo proporcionados en los baños. Con una variedad grande de platos, Ki Karu y el Puerto Sanchez están a 175 metros de la propiedad. El hotel está a 52 minutos en coche del Aeropuerto Concordia, que está situado a 60 km.", 
    "Santiago Cabral 989", 11, 3, 9);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Doña María",
	"Ubicado en el centro de la ciudad de Ocaña, en medio de la zonas turísticas y de comercio, en una pintoresca casa se encuentra el contemporáneo Hotel Boutique Doña María con habitaciones que cuidan cada detalle para brindar calidez y tranquilidad.", 
    "Av. Pedro Romero #59-137", 14, 4, 11);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Dpto. en Bariloche",
	"Hermoso departamento con ubicación privilegiada, en un barrio tranquilo, con vista panorámica a Los Andes y al Lago Nahuel Huapi. A solo 5 minutos del centro de la ciudad y 20 minutos de las pistas de ski C.Catedral. Mi alojamiento es bueno para parejas aventureros, viajeros de negocios, familias con hijos y grupos grandes ya que con La Casa Andes View Temporario podemos alojar hasta 18 personas. Excelente calidad de construcción con madera local y diseño moderno.", 
    "Av. Jardín Botánico 2211", 16, 4, 13);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"El Enemigo",
	"El mayor enemigo que tenemos las personas somos nosotros mismos. Esta es la esencia de Casa El Enemigo en Mendoza, Argentina. En su logotipo muestra la lucha de un hombre y un dragón como esencia de lo que hacemos todos cada día: luchar con nosotros mismos, con nuestros miedos y frustraciones, para tratar de alcanzar nuestros objetivos. Esta fue la idea con la que el enólogo Alejandro Vigil creó esta marca, y con la que se etiqueta uno de los mejores vinos de Argentina.", 
    "Av. Perú 1901", 12, 3, 10);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Las Perdices",
	"Complejo informal de cabañas con decoración cálida en las montañas con piscina al aire libre de temporada.", 
    "Calle 41 #48-97", 15, 2, 9);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Casa Petrini",
	"Casa Petrini, es un proyecto enoturístico que integra Bodega, Alojamiento, Restaurant y Spa. Ubicado en el Valle de Uco, Tupungato, a tan solo 90 minutos de la ciudad de Mendoza, Argentina.", 
    "Av. Medrano 897", 13, 2, 1);
INSERT INTO productos (nombre, descripcion, direccion, horario_check_in, fk_categoria, fk_ciudad) VALUES (
	"Ana Bistró",
	"Anna Bistro es un paraíso en la ciudad, un lugar que recuerda al propio hogar. Desestructurado y relajado, al encontrarse en medio de un gran jardín logra que los espacios interiores y exteriores interactúen constantemente. Este lugar no posee la formalidad de un clásico restaurante ya que dentro de un mismo lugar es posible encontrar una opción para el desayuno y cafetería abastecida con excelente pastelería propia, petites dejeuners y american breakfast cuyas cartas se complementan con coisantes, facturas, tostados, jugos, huevos, yogur con ensalada de frutas, frutas secas y miel que complementan la propuesta matutina.", 
    "Calle 66a #80-10", 16, 3, 8);
COMMIT;

--
-- Dumping data for table `caracteristicas`
--
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

-- Producto 1
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,4);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,5);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,6);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,7);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (1,8);
-- Producto 2
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (2,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (2,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (2,4);
-- Producto 3
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (3,4);
-- Producto 4
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (4,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (4,3);
-- Producto 5
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (5,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (5,3);
-- Producto 6
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (6,2);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (6,4);
-- Producto 7
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (7,5);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (7,6);
-- Producto 8
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (8,7);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (8,8);
-- Producto 9
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (9,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (9,10);
-- Producto 10
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (10,9);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (10,10);
-- Producto 11
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (11,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (11,3);
-- Producto 12
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (12,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (12,6);
-- Producto 13
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (13,3);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (13,8);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (13,4);
-- Producto 14
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (14,1);
INSERT INTO producto_caracteristica (producto_id, caracteristica_id) VALUES (14,10);
COMMIT;

--
-- Dumping data for table `imagenes`
--

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
-- Dumping data for table `tipo_politica`
--
INSERT INTO tipo_politica (nombre) VALUES ("Normas de la casa");
INSERT INTO tipo_politica (nombre) VALUES ("Salud y seguridad");
INSERT INTO tipo_politica (nombre) VALUES ("Política de cancelación");
COMMIT;


--
-- Dumping data for table `politica`
--
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

-- Producto 1
INSERT INTO politica_producto (politica_id, producto_id) VALUES (1,1);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (3,1);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (5,1);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (7,1);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (9,1);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (11,1);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (13,1);

-- Producto 2
INSERT INTO politica_producto (politica_id, producto_id) VALUES (2,2);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (4,2);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (6,2);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (8,2);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (10,2);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (12,2);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (14,2);

-- Producto 3
INSERT INTO politica_producto (politica_id, producto_id) VALUES (1,3);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (3,3);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (5,3);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (7,3);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (9,3);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (11,3);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (15,3);

-- Producto 4
INSERT INTO politica_producto (politica_id, producto_id) VALUES (2,4);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (4,4);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (6,4);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (8,4);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (10,4);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (12,4);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (13,4);

-- Producto 5
INSERT INTO politica_producto (politica_id, producto_id) VALUES (1,5);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (3,5);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (5,5);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (7,5);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (9,5);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (11,5);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (14,5);

-- Producto 6
INSERT INTO politica_producto (politica_id, producto_id) VALUES (2,6);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (4,6);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (6,6);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (8,6);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (10,6);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (12,6);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (15,6);

-- Producto 7
INSERT INTO politica_producto (politica_id, producto_id) VALUES (1,7);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (3,7);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (5,7);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (7,7);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (9,7);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (11,7);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (13,7);

-- Producto 8
INSERT INTO politica_producto (politica_id, producto_id) VALUES (2,8);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (4,8);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (6,8);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (8,8);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (10,8);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (12,8);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (14,8);

-- Producto 9
INSERT INTO politica_producto (politica_id, producto_id) VALUES (1,9);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (3,9);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (5,9);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (7,9);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (9,9);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (11,9);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (15,9);

-- Producto 10
INSERT INTO politica_producto (politica_id, producto_id) VALUES (2,10);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (4,10);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (6,10);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (8,10);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (10,10);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (12,10);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (13,10);

-- Producto 11
INSERT INTO politica_producto (politica_id, producto_id) VALUES (1,11);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (3,11);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (5,11);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (7,11);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (9,11);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (11,11);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (14,11);

-- Producto 12
INSERT INTO politica_producto (politica_id, producto_id) VALUES (2,12);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (4,12);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (6,12);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (8,12);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (10,12);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (12,12);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (15,12);

-- Producto 13
INSERT INTO politica_producto (politica_id, producto_id) VALUES (1,13);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (3,13);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (5,13);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (7,13);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (9,13);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (11,13);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (13,13);

-- Producto 14
INSERT INTO politica_producto (politica_id, producto_id) VALUES (2,14);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (4,14);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (6,14);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (8,14);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (10,14);
INSERT INTO politica_producto (politica_id, producto_id) VALUES (12,14);

INSERT INTO politica_producto (politica_id, producto_id) VALUES (14,14);

--
-- Dumping data for table `roles`
--
INSERT INTO roles (rol_nombre) VALUES ("ADMIN");
INSERT INTO roles (rol_nombre) VALUES ("USER");
COMMIT;

--
-- Dumping data for table `usuarios`
--
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada, fk_rol) VALUES ("Pepe", "Pepardo", "pepe@gmail.com", "$2a$12$km8QmiuebecWgzJobSXFa.OWee9gCwWXgyPDeEQJg03bt/Ney2T.u", FALSE, 1);
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada, fk_rol) VALUES ("José", "Gómez", "jose@gmail.com", "$2a$12$nZP6qmpNe.O83nHMB4Y/BeQjum0CaEpA2wtSLlWzcb6jZZg80buda", FALSE, 2);
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada, fk_rol) VALUES ("Josefina", "Gómez", "josefina@gmail.com", "$2a$12$XY8De0gZH4T7PB9ODzWKgedt5VbxihC/hxG5x1OzfX5eIj1bss31m", FALSE, 2);
COMMIT;

--
-- Dumping data for table `usuario_producto`
--

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

--
-- Dumping data for table `puntuaciones`
--

-- Producto 1
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (2, 1, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 1, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 1, 3);
-- Producto 2
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 2, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 2, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 2, 3);
-- Producto 3
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 3, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 3, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (2, 3, 3);
-- Producto 4
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 4, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 4, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 4, 3);
-- Producto 5
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 5, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 5, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 5, 3);
-- Producto 6
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 6, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 6, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 6, 3);
-- Producto 7
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 7, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 7, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 7, 3);
-- Producto 8
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 8, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 8, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 8, 3);
-- Producto 9
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 9, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 9, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 9, 3);
-- Producto 10
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 10, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 10, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 10, 3);
-- Producto 11
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 11, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (4, 11, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 11, 3);
-- Producto 12
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (2, 12, 1);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (5, 12, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 12, 3);
COMMIT;

--
-- Dumping data for table `reservas`
--
SET AUTOCOMMIT=0;
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Jorgito", "Ramirez", "jorgito@hb.com", "Caballito", 10, "2021-11-18", "2021-11-23", "Esto es una prueba para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", true, 1, 1);
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Jorgelina", "Gutierrez", "jorgelina@hb.com", "Caballito", 8, "2021-10-18", "2021-10-23", "", true, 2, 1);
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Gustavo", "Fernandez", "gusti@hb.com", "Caballito", 12, "2021-09-18", "2021-09-23", null, true, 3, 1);
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Manuela", "Manolita", "mmanolita@hb.com", "Caballito", 9, "2021-08-18", "2021-08-23", "Esto es una prueba 4 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 4, 1);
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Florencia", "Fazz", "ffazz@hb.com", "Caballito", 7, "2021-07-18", "2021-07-23", "Esto es una prueba 5 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 5, 1);
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Lucia", "Ramirez", "lucy@hb.com", "Caballito", 11, "2021-06-18", "2021-06-23", "Esto es una prueba 6 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 6, 1);
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Lucia", "Ramirez", "lucy@hb.com", "Caballito", 11, "2021-12-26", "2021-12-31", "Esto es una prueba 6 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 1, 1);
INSERT INTO reservas (nombre, apellido, mail, ciudad, hora_entrada, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("Lucia", "Ramirez", "lucy@hb.com", "Caballito", 11, "2021-12-31", "2022-01-15", "Esto es una prueba 6 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 2, 1);
COMMIT;