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
-- Dumping data for table `tipo_politica`
--
SET AUTOCOMMIT=0;
DELETE from tipo_politica;
INSERT INTO tipo_politica (nombre) VALUES ("Normas de la casa");
INSERT INTO tipo_politica (nombre) VALUES ("Salud y seguridad");
INSERT INTO tipo_politica (nombre) VALUES ("Política de cancelación");
COMMIT;


--
-- Dumping data for table `politica`
--
SET AUTOCOMMIT=0;
DELETE from politicas;
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
DELETE from politica_producto;
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
