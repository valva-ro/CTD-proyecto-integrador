import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

import style from "./Layout.module.css";
import SideNav from "../SideNav/SideNav";

export default function Layout(props){
    return(
        <>
            <Header>
                <Profile/>
            </Header>
            <main>
                <SideNav/>
                {props.children}
            </main>      
            <Footer></Footer>
        </>
    );
}