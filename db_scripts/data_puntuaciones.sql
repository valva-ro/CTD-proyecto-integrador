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
-- Dumping data for table `puntuaciones`
--
SET AUTOCOMMIT=0;
DELETE FROM puntuaciones;
-- Producto 1
INSERT INTO puntuaciones (puntuacion, comentario, fk_producto, fk_usuario) VALUES (2, "Lindo pero pésima la atención y la limpieza", 1, 1);
INSERT INTO puntuaciones (puntuacion, comentario, fk_producto, fk_usuario) VALUES (4, "Todo impecable, me encantó!", 1, 2);
INSERT INTO puntuaciones (puntuacion, fk_producto, fk_usuario) VALUES (3, 1, 3);
-- Producto 2
INSERT INTO puntuaciones (puntuacion, comentario, fk_producto, fk_usuario) VALUES (4, "Increíble este lugar, lo súper recomiendo", 2, 1);
INSERT INTO puntuaciones (puntuacion, comentario, fk_producto, fk_usuario) VALUES (5, "Muy lindo el lugar, la atención, la limpieza. Volvería 100%", 2, 2);
INSERT INTO puntuaciones (puntuacion, comentario, fk_producto, fk_usuario) VALUES (4, "Súper recomendable", 2, 3);
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