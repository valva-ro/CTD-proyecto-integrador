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
-- Dumping data for table `caracteristicas`
--
SET AUTOCOMMIT=0;
DELETE from caracteristicas;
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
