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
-- Dumping data for table `reservas`
--
SET AUTOCOMMIT=0;
INSERT INTO reservas (hora_entrada, hora_salida, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("10:00:00", "20:00:00", "2021-11-18", "2021-11-23", "Esto es una prueba para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", true, 1, 1);
INSERT INTO reservas (hora_entrada, hora_salida, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("08:00:00", "18:00:00", "2021-10-18", "2021-10-23", "Esto es una prueba 2 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", true, 2, 1);
INSERT INTO reservas (hora_entrada, hora_salida, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("12:00:00", "22:00:00", "2021-09-18", "2021-09-23", "Esto es una prueba 3 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", true, 3, 1);
INSERT INTO reservas (hora_entrada, hora_salida, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("09:00:00", "19:00:00", "2021-08-18", "2021-08-23", "Esto es una prueba 4 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 4, 1);
INSERT INTO reservas (hora_entrada, hora_salida, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("07:30:00", "17:30:00", "2021-07-18", "2021-07-23", "Esto es una prueba 5 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 5, 1);
INSERT INTO reservas (hora_entrada, hora_salida, fecha_ingreso, fecha_egreso, datos, vacuna_covid, fk_producto, fk_usuario) 
VALUES ("11:25:00", "21:25:00", "2021-06-18", "2021-06-23", "Esto es una prueba 6 para ver si los datos de reserva funcionan correctamente, el vendedor es un genio!!!", false, 6, 1);
COMMIT;