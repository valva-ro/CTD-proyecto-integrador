import { useState, useEffect } from "react";
import TituloBloque from "../../../TituloBloque/TituloBloque"
import DatePicker, {
    CalendarContainer,
    registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import useScreenWidth from "../../../../hooks/useScreenWidth";
import obtenerFechasReservadas from "../../../../utils/obtenerFechasReservadas.js"
import obtenerFechasNoSeleccionables from "../../../../utils/obtenerFechasNoSeleccionables.js"
import useDisabledDate from "../../../../hooks/useDisabledDates"

registerLocale("es", es);

export default function ProductoFechaReserva( {setCheckin, setCheckout}){

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const fechasReservadas = obtenerFechasReservadas();
    const fechasNoSeleccionables = obtenerFechasNoSeleccionables(startDate);
    const excludeDatesDinamico = useDisabledDate(fechasReservadas, fechasNoSeleccionables, startDate, endDate);
    const anchoPantalla = useScreenWidth();

    const MyContainer = ({ className, children }) => {
      return (
        <CalendarContainer className="calendarContainerReservas">
          {children}
        </CalendarContainer>
      );
    };

    useEffect (() => {
        setCheckin(startDate);
        setCheckout(endDate);
    }, [startDate, endDate]);

    return(
        <>
            <TituloBloque>Seleccioná tu fecha de reserva</TituloBloque>
            <DatePicker
                monthsShown={anchoPantalla <= 740 ? 1 : 2}
                inline
                calendarContainer={MyContainer}
                locale={es}
                formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
                excludeDates = {excludeDatesDinamico}
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

    )
}