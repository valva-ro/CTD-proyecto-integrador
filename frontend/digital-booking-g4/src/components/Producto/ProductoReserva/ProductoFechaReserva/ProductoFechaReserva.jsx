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
    const hoy = new Date();
    const ayer = hoy.setDate(hoy.getDate() - 1);
    const diaDeAyer = new Date(ayer).getDate();
    const mes = new Date(ayer).getMonth();
    const anio = new Date(ayer).getFullYear();
    
    const diasAnterioresALaFecha = [];

    for (let i=1; i <= diaDeAyer ; i++){
        diasAnterioresALaFecha.push(new Date ( anio, mes, i));
    }

    const fechasReservadas = [  
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
        new Date(2022, 2, 19),
        new Date(2022, 2, 20),
        
    ];


    const excludeDates = diasAnterioresALaFecha.concat(fechasReservadas);
    const fechasNoSeleccionables = []

    /* Fechas reservadas posteriores */
    const excludeDateOrdenado = excludeDates.sort((a,b) => new Date(a).getTime() - new Date(b).getTime());
    const nextExcludeDate = excludeDateOrdenado.find(element => element > startDate);
        
    const auxExcludeDate = new Date(nextExcludeDate);
    const endExcludeDate = auxExcludeDate.setDate(auxExcludeDate.getDate() + 62); 
    
    for (let d = new Date(nextExcludeDate); d <= new Date(endExcludeDate) ; d.setDate(d.getDate() + 1)){
        fechasNoSeleccionables.push(new Date(d));
    }

    /* Fechas reservadas anteriores */
    const beforeBookingDates = fechasReservadas.filter((element) => new Date(element) < new Date(startDate));
    const maxDate = new Date(Math.max.apply(null,beforeBookingDates));

    const auxMaxDate = new Date(maxDate);
    const beforeExcludeDates = auxMaxDate.setDate(auxMaxDate.getDate() - 62);

    if(!isNaN(maxDate) && !isNaN(beforeExcludeDates)){
        for (let d = new Date(beforeExcludeDates); d <= new Date(maxDate) ; d.setDate(d.getDate() + 1)){
            fechasNoSeleccionables.push(new Date(d));
        }
    } 

    const excludeDatesOutRange = diasAnterioresALaFecha.concat(fechasNoSeleccionables);
    
    /*Effect para habilitar y deshabilitar fechas en función de la fecha de checkin*/
    const [auxExcludeDatesDinamico, setAuxExcludeDatesDinamico] = useState(excludeDates)

    useEffect (() => {    
        if (startDate != null && endDate == null)  {
            setAuxExcludeDatesDinamico (excludeDatesOutRange)
        }
        if (endDate != null){
            setAuxExcludeDatesDinamico (excludeDates)
        }
                 
        return () => {
            setAuxExcludeDatesDinamico (excludeDates)
        }

    }, [startDate, endDate]); 

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
                excludeDates = {auxExcludeDatesDinamico}
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