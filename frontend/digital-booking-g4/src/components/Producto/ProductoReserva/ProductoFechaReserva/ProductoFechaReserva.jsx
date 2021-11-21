import { useState, useEffect } from "react";
import TituloBloque from "../../../TituloBloque/TituloBloque"
import DatePicker, {
    CalendarContainer,
    registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import useScreenWidth from "../../../../hooks/useScreenWidth"

registerLocale("es", es);

export default function ProductoFechaReserva( {setCheckin, setCheckout}){

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    
    /* desabilita los días anteriores al día actual*/
    let hoy = new Date();
    let ayer = hoy.setDate(hoy.getDate() - 1);
    let diaDeAyer = new Date(ayer).getDate();
    let mes = new Date(ayer).getMonth();
    let anio = new Date(ayer).getFullYear();
    
    let diasAnterioresALaFecha = [];

    for (let i=1; i <= diaDeAyer ; i++){
        diasAnterioresALaFecha.push(new Date ( anio, mes, i));
    }

    let fechasReservadas = [  
        //año, mes, dia --> el mes está corrido. ej: 11 = diciembre / 12 = enero
        //TODO: consumir de la API reservas
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
        new Date(2022, 0, 6),
        new Date(2022, 0, 7),
        new Date(2022, 0, 8),
        new Date(2022, 0, 9),
        new Date(2022, 0, 12),
        new Date(2022, 0, 13),
        new Date(2022, 0, 14),
        new Date(2022, 0, 15),
        new Date(2022, 0, 30),
        new Date(2022, 0, 31),
        new Date(2022, 1, 5),
        new Date(2022, 1, 6),
        new Date(2022, 1, 10),
        new Date(2022, 1, 11),
    ];

    const excludeDates = diasAnterioresALaFecha.concat(fechasReservadas);

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
                excludeDates={excludeDates}
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