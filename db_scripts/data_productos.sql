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