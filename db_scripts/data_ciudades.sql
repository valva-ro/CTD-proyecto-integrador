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
-- Dumping data for table `ciudades`
--
SET AUTOCOMMIT=0;
DELETE from ciudades;
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