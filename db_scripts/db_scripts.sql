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
CREATE SCHEMA booking;
USE booking;

--
-- Table structure for table `categorias`
--
DROP TABLE IF EXISTS categorias;
CREATE TABLE categorias (
  categoria_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  URL_imagen TEXT NOT NULL,
  PRIMARY KEY (categoria_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `ciudades`
--
DROP TABLE IF EXISTS ciudades;
CREATE TABLE ciudades (
  ciudad_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  pais VARCHAR(50) NOT NULL,
  PRIMARY KEY (ciudad_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `imagenes`
--
DROP TABLE IF EXISTS imagenes;
CREATE TABLE imagenes (
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
CREATE TABLE caracteristicas (
  caracteristica_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  icono TEXT NOT NULL,
  PRIMARY KEY (caracteristica_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `productos`
--
DROP TABLE IF EXISTS productos;
CREATE TABLE productos (
	producto_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
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
CREATE TABLE producto_caracteristica (
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

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;