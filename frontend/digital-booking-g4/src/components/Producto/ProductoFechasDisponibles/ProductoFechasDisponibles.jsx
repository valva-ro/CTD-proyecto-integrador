import { useState } from "react";
import TituloBloque from "../../TituloBloque/TituloBloque";
import DatePicker, {
  CalendarContainer,
  registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ProductoFechasDisponibles.module.css";
import FilledButton from "../../Buttons/FilledButton";
import es from "date-fns/locale/es";
import useScreenWidth from "../../../hooks/useScreenWidth";
import excludedDates from "../../../utils/excludedDates";

registerLocale("es", es);

export default function ProductoFechasDisponibles() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = [
    new Date(JSON.parse(localStorage.getItem("startDate"))),
    new Date(JSON.parse(localStorage.getItem("endDate"))),
  ];

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
          excludeDates={excludedDates()}
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
          <FilledButton styles={styles.reservaButton}>
            Iniciar reserva
          </FilledButton>
        </div>
      </div>
    </section>
  );
}
