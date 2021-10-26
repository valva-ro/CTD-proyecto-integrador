import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import SideNav from "../SideNav/SideNav";
import { Router, Route, IndexRoute, browserHistory } from "react-router-3"
import Login from "../Forms/Login"
import Register from "../Forms/Register"

import style from "./Layout.module.css";

export default function Layout(props){
    return (
      <>
        <Header/>
        <main>
          {props.children}
        </main>
        <Footer/>
      </>
    );
}