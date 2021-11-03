import { useState, useEffect } from "react";


export default function useFetch(path) {
    let [items, setItems] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);
    let [error, setError]= useState(null)

    // algo parecido a un DidMount...
    useEffect(() => {
    
        async function fetchData() {

            try{
                
            let response = await fetch(`http://localhost:8080/${path}`);
            
            let datos = await response.json();
           console.log(datos);
            setItems(datos)
            setIsLoaded(true)}
            catch (err){
                setError(err)
            }
        }

        
            fetchData()
       
    }, [])

    return {items, isLoaded,error }
}