import { useState } from "react";
import DatePicker, {
  CalendarContainer,
  registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import TituloBloque from "../../../TituloBloque/TituloBloque";
import FilledButton from "../../../Buttons/FilledButton";
import es from "date-fns/locale/es";
import useScreenWidth from "../../../../hooks/useScreenWidth";
import obtenerFechasReservadas from "../../../../utils/obtenerFechasReservadas.js";
import obtenerFechasNoSeleccionables from "../../../../utils/obtenerFechasNoSeleccionables.js";
import useDisabledDate from "../../../../hooks/useDisabledDates";
import styles from "./ProductoFechasDisponibles.module.css";

registerLocale("es", es);

export default function ProductoFechasDisponibles() {
  const startDateStorage = localStorage.hasOwnProperty("startDate")
    ? new Date(JSON.parse(localStorage.getItem("startDate")))
    : null;
  const endDateStorage = localStorage.hasOwnProperty("endDate")
    ? new Date(JSON.parse(localStorage.getItem("endDate")))
    : null;
  const [dateRange, setDateRange] = useState([
    startDateStorage,
    endDateStorage,
  ]);
  const [startDate, endDate] = dateRange;
  const fechasReservadas = obtenerFechasReservadas();
  const fechasNoSeleccionables = obtenerFechasNoSeleccionables(startDate);
  const excludeDatesDinamico = useDisabledDate(
    fechasReservadas,
    fechasNoSeleccionables,
    startDate,
    endDate
  );
  const { id } = useParams();

  const anchoPantalla = useScreenWidth();

  const MyContainer = ({ className, children }) => {
    return (
      <CalendarContainer className="calendarContainer">
        {children}
      </CalendarContainer>
    );
  };

  return (
    <section className={styles.bloqueFechasDisponiblesContainer}>
      <TituloBloque>Fechas disponibles</TituloBloque>
      <div className={styles.reservasContenido}>
        <DatePicker
          monthsShown={anchoPantalla <= 740 ? 1 : 2}
          inline
          calendarContainer={MyContainer}
          locale={es}
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
          excludeDates={excludeDatesDinamico}
          minDate={new Date()}
          onChange={(update) => {
            setDateRange(update);
          }}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
        />
        <div className={styles.agregarReservas}>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <Link to={`/product/${id}/booking`}>
            <FilledButton styles={styles.reservaButton}>
              Iniciar reserva
            </FilledButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
