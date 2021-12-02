import {
  useState,
  useEffect
} from "react";

import backUrl from "../resources/backUrl"

export default function useFetch(path, settings = {}) {
  let [items, setItems] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(backUrl() + path, settings);
        let datos = await response.json();
        setItems(datos);
        setIsLoaded(true);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  return {
    items,
    isLoaded,
    error,
  };
}