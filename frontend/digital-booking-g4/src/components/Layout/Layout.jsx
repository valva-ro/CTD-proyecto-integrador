import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BloqueFechasDisponibles from "../BloqueFechasDisponiblesYReserva/BloqueFechasDisponibles";
import Searcher from "../Searcher/Searcher";

export default function Layout(props){
    return (
      <>
        <BloqueFechasDisponibles />
        <Searcher />
      </>
    );
}