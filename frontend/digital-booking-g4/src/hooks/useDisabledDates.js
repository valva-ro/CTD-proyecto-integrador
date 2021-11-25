import { useState, useEffect } from "react";

export default function useDisabledDates(fechasReservadas,fechasNoSeleccionables,startDate,endDate){
    const [excludeDatesDinamico, setExcludeDatesDinamico] = useState(fechasReservadas)

    useEffect (() => {    
        if (startDate != null && endDate == null)  {
            setExcludeDatesDinamico (fechasNoSeleccionables)
        }
        if (endDate != null){
            setExcludeDatesDinamico (fechasReservadas)
        }
                
        return () => {
            setExcludeDatesDinamico (fechasReservadas)
        }

    }, [startDate, endDate]); 

    return excludeDatesDinamico;
}