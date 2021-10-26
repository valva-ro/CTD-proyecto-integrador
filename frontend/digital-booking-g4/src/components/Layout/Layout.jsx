import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import SideNav from "../SideNav/SideNav";

import style from "./Layout.module.css";
import Login from "../Forms/Login";

export default function Layout(){
    return (
      <>
        <Header></Header>
        {/* TODO: agregar ruteo */}
        <main>
          <Login/>  
        </main>
        <Footer></Footer>
      </>
    );
}