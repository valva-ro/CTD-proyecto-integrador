import {
  useState,
  useEffect
} from "react";

export default function useFetchFechas(inicio, fin, currentCity, currentCategory) {
  let [itemsFechas, setItemsFechas] = useState(null);
  let [isLoadedFechas, setIsLoadedFechas] = useState(false);
  let [isLoaded, setIsLoaded] = useState(false);
  let [errorFechas, setErrorFechas] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`http://localhost:8080/productos/?fechaIngreso=${inicio}&fechaEgreso=${fin}`);
        let datos = await response.json();
        setItemsFechas(datos);
        setIsLoadedFechas(true);
        setIsLoaded(true);
      } catch (err) {
        setErrorFechas(err);
      }

      return(
        setIsLoadedFechas(false)
      )
    }
    fetchData();
  }, [inicio, fin, currentCity, currentCategory]);

  return {
    itemsFechas,
    isLoadedFechas,
    isLoaded,
    errorFechas,
  };
}