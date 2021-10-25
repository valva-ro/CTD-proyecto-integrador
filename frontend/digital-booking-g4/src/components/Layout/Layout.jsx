import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import BloqueAlojamientos from "../BloqueAlojamientos/BloqueAlojamientos";
import BloqueCategorias from "../BloqueCategorias/BloqueCategorias.jsx";

import style from "./Layout.module.css";
import SideNav from "../SideNav/SideNav";

export default function Layout(){
    return (
      <>
        <Header></Header>
        <main>
          <BloqueCategorias />
          <BloqueAlojamientos />
        </main>
        <Footer></Footer>
      </>
    );
}