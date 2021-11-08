import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Producto from "../Producto/Producto";

export default function Layout(props){
    return (
      <>
        <Header />
        <main>
          {/* {props.children}
           */}

          <Producto />
        </main>
        <Footer />
      </>
    );
}