import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ListadoAlojamientos from "../ListadoAlojamientos/ListadoAlojamientos";

import style from "./Layout.module.css";
import SideNav from "../SideNav/SideNav";

export default function Layout(){
    return(
        <>
            <Header>
                
            </Header>
            <main>
               <ListadoAlojamientos/>
            </main>      
            <Footer></Footer>
        </>
    );
}