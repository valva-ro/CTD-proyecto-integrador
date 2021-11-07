import React, {useEffect, useState} from "react";
import TituloBloque from "../TituloBloque/TituloBloque";
import DatePicker, { CalendarContainer, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BloqueFechasDisponibles.module.css";
import FilledButton from "../Buttons/FilledButton";
import es from "date-fns/locale/es";
import { subDays } from "date-fns";

registerLocale("es", es);

export default function BloqueFechasDisponibles() {

  const excludeDates = [
    //año, mes, dia --> el mes está corrido. ej: 11 = diciembre / 12 = enero
    new Date(2021, 2, 12),
    new Date(2021, 10, 5),
    new Date(2021, 10, 4),
    new Date(2021, 10, 9),
    new Date(2021, 10, 12),
    new Date(2021, 10, 17),
    new Date(2021, 10, 18),
    new Date(2021, 10, 19),
    new Date(2021, 10, 20),
    new Date(2021, 10, 21),
    new Date(2021, 10, 28),
    new Date(2021, 10, 29),
    new Date(2021, 10, 5),
    new Date(2021, 10, 4),
    new Date(2021, 10, 9),
    new Date(2021, 11, 2),
    new Date(2021, 11, 3),
    new Date(2021, 11, 4),
    new Date(2021, 11, 5),
    new Date(2021, 11, 17),
    new Date(2021, 11, 18),
    new Date(2021, 11, 19),
    new Date(2021, 11, 20),
    new Date(2021, 11, 21),
    new Date(2021, 11, 28),
    new Date(2021, 11, 29),
  ]

  const MyContainer = ({ className, children }) => {
    return (
      <CalendarContainer className="calendarContainer">
        {children}
      </CalendarContainer>
    );
  };

  console.log(es);
  return (
    <div className={styles.bloqueFechasDisponiblesContainer}>
      <TituloBloque>Fechas disponibles</TituloBloque>
      <div className={styles.reservasContenido}>
        <DatePicker 
        monthsShown={window.screen.width <= 600 ? 1 : 2} 
        inline 
        calendarContainer={MyContainer}
        locale={es}
        dateFormatCalendar="MMMM"
        formatWeekDay={nameOfDay => nameOfDay.substr(0,1)}
        excludeDates={excludeDates}
        />
        <div className={styles.agregarReservas}>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <FilledButton styles={styles.reservaButton}>
            Iniciar reserva
          </FilledButton>
        </div>
      </div>
    </div>
  );
}
