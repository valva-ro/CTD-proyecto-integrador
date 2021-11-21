import {
  useState,
  useEffect
} from "react";

export default function useFetch(path) {
  let [items, setItems] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`http://18.191.187.108:8080/${path}`);
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