import {
  useState,
  useEffect
} from "react";

export default function useFetch(path, settings = {}) {
  let [items, setItems] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`http://localhost:8080/${path}`, settings);
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