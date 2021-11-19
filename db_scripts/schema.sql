-- Booking database schema
-- Version 1.0

-- Copyright (c) 2021 grupo 4 - Digital House. 
-- All rights reserved.

-- Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

--  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
--  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
--  * Neither the name of Oracle nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

-- THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS booking;
CREATE SCHEMA IF NOT EXISTS booking;
USE booking;

--
-- Table structure for table `categorias`
--
DROP TABLE IF EXISTS categorias;
CREATE TABLE IF NOT EXISTS categorias (
  categoria_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  descripcion VARCHAR(50) NOT NULL,
  URL_imagen TEXT NOT NULL,
  PRIMARY KEY (categoria_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `ciudades`
--
DROP TABLE IF EXISTS ciudades;
CREATE TABLE IF NOT EXISTS ciudades (
  ciudad_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  pais VARCHAR(50) NOT NULL,
  latitud DOUBLE(7,4) NOT NULL,
  longitud DOUBLE(7,4) NOT NULL,
  PRIMARY KEY (ciudad_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `imagenes`
--
DROP TABLE IF EXISTS imagenes;
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
-- Table structure for table `caracteristicas`
--
DROP TABLE IF EXISTS caracteristicas;
CREATE TABLE IF NOT EXISTS caracteristicas (
  caracteristica_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  icono TEXT NOT NULL,
  PRIMARY KEY (caracteristica_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `productos`
--
DROP TABLE IF EXISTS productos;
CREATE TABLE IF NOT EXISTS productos (
	producto_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
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
-- Table structure for table `producto_caracteristica`
--
DROP TABLE IF EXISTS producto_caracteristica;
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
-- Table structure for table `tipo_politica`
--
DROP TABLE IF EXISTS tipo_politica;
CREATE TABLE tipo_politica(
	tipo_politica_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    PRIMARY KEY  (tipo_politica_id)    
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `politica`
--
DROP TABLE IF EXISTS politicas;
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
--
DROP TABLE IF EXISTS  politica_producto;
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
-- Table structure for table `usuario`
--
DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios (
  usuario_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  mail VARCHAR(100) NOT NULL,
  contrasenia VARCHAR(100) NOT NULL,
  cuenta_validada BOOLEAN NOT NULL,
  PRIMARY KEY  (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `usuario_alojamiento`
--
DROP TABLE IF EXISTS usuario_producto;
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
DROP TABLE IF EXISTS puntuaciones;
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
--
DROP TABLE IF EXISTS reservas;
CREATE TABLE IF NOT EXISTS reservas (
  reserva_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  hora_entrada TIME NOT NULL,
  hora_salida TIME NOT NULL,
  fecha_ingreso DATE NOT NULL,
  fecha_egreso DATE NOT NULL,
  datos TEXT NOT NULL COMMENT "datos para el vendedor",
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