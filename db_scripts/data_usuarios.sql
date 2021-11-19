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
-- Dumping data for table `usuarios`
--
SET AUTOCOMMIT=0;
DELETE FROM usuarios;
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada) VALUES ("Pepe", "Pepardo", "pepe@gmail.com", "pepe1234", FALSE);
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada) VALUES ("José", "Gómez", "jose@gmail.com", "jose1234", FALSE);
INSERT INTO usuarios (nombre, apellido, mail, contrasenia, cuenta_validada) VALUES ("Josefina", "Gómez", "josefina@gmail.com", "josefina1234", FALSE);
COMMIT;

--
-- Dumping data for table `usuario_producto`
--
SET AUTOCOMMIT=0;
DELETE FROM usuario_producto;
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