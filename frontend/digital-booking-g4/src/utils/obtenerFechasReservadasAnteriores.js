import obtenerFechasReservadas from "./obtenerFechasReservadas";

export default function obtenerFechasReservadasAnteriores(startDate){
    const fechasNoSeleccionablesAnteriores=[]
    const excludeDates = obtenerFechasReservadas();
    const beforeBookingDates = excludeDates.filter((element) => new Date(element) < new Date(startDate));
    const maxDate = new Date(Math.max.apply(null,beforeBookingDates));
    
    const auxMaxDate = new Date(maxDate);
    const beforeExcludeDates = auxMaxDate.setDate(auxMaxDate.getDate() - 62);
    
    if(!isNaN(maxDate) && !isNaN(beforeExcludeDates)){
        for (let d = new Date(beforeExcludeDates); d <= new Date(maxDate) ; d.setDate(d.getDate() + 1)){
            fechasNoSeleccionablesAnteriores.push(new Date(d));
        }
    } 
    return fechasNoSeleccionablesAnteriores;
}

