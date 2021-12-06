import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker, {
  CalendarContainer,
  registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import TituloBloque from "../../../TituloBloque/TituloBloque";
import useScreenWidth from "../../../../hooks/useScreenWidth";
import useDisabledDate from "../../../../hooks/useDisabledDates";

registerLocale("es", es);

export default function ProductoFechaReserva({ setCheckin, setCheckout }) {
  const { id } = useParams();
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
  const excludeDatesDinamico = useDisabledDate(id, startDate, endDate);
  const anchoPantalla = useScreenWidth();

  const MyContainer = ({ className, children }) => {
    return (
      <CalendarContainer className="calendarContainerReservas">
        {children}
      </CalendarContainer>
    );
  };

  useEffect(() => {
    setCheckin(startDate);
    setCheckout(endDate);
  }, [startDate, endDate]);

  return (
    <>
      <TituloBloque>Seleccioná tu fecha de reserva</TituloBloque>
      <DatePicker
        required
        monthsShown={anchoPantalla <= 740 ? 1 : 2}
        inline
        calendarContainer={MyContainer}
        locale={es}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
        excludeDates={excludeDatesDinamico}
        minDate={new Date()}
        dateFormat="dd/mm/yyyy"
        onChange={(update) => {
          setDateRange(update);
        }}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
}
