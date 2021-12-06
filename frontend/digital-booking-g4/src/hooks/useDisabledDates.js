import { useState, useEffect, useReducer } from "react";
import obtenerFechasNoSeleccionables from "../utils/obtenerFechasNoSeleccionables";
import useFetchFechasReservadas from "./useFetchFechasReservadas";

function reducer(state, newState) {
  return {
    ...state,
    ...newState,
  };
}

export default function useDisabledDates(id, startDate, endDate) {
  const { isLoaded, fechasReservadas } = useFetchFechasReservadas(id);
  const [excludeDatesDinamico, setExcludeDatesDinamico] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      setExcludeDatesDinamico(fechasReservadas);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (startDate != null && endDate == null) {
      setExcludeDatesDinamico(
        obtenerFechasNoSeleccionables(startDate, fechasReservadas)
      );
    }

    return () => {
      setExcludeDatesDinamico(fechasReservadas);
    };
  }, [startDate, endDate]);

  return excludeDatesDinamico;
}
