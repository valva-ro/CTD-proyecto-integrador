import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import loggedContext from "../../contexts/loggedContext"
import { useEffect, useContext } from "react";



export default function Layout(props) {
  
  const { setIsLogged, setUserInformation } = useContext(loggedContext);
  
  useEffect(() => {
    if(localStorage.getItem("jwt") != null){
      setIsLogged(true);
      setUserInformation({ nombre: JSON.parse(localStorage.getItem("nombre")), apellido: JSON.parse(localStorage.getItem("apellido")) });
    }
    if(localStorage.getItem("jwt") == ""){
      setIsLogged(false)
    }

  }, [Header]) 

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
