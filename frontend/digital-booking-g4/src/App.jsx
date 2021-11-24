import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import TarjetaReservaExitosa from "./components/TarjetaReservaExitosa/TarjetaReservaExitosa.jsx";
import Favoritos from "./components/Favoritos/Favoritos";
import ScrollToTop from "./components/ScrollToTop";
import loggedContext from "./contexts/loggedContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductoLayout from "./components/Producto/ProductoLayout/ProductoLayout";
import ProductoDetalle from "./components/Producto/ProductoDetalle/ProductoDetalle";
import ProductoReserva from "./components/Producto/ProductoReserva/ProductoReserva";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userInformation, setUserInformation] = useState({
    nombre: "",
    apellido: "",
  });
  AOS.init();

  return (
    <loggedContext.Provider
      value={{ isLogged, setIsLogged, userInformation, setUserInformation }}
    >
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/favorites" component={Favoritos} />
              <Route path="/success" component={TarjetaReservaExitosa} />
              <Route path="/product/:id/features">
                <ProductoLayout>
                  <ProductoDetalle />
                </ProductoLayout>
              </Route>
              <Route path="/product/:id/booking">
                <ProductoLayout>
                  <ProductoReserva />
                </ProductoLayout>
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </loggedContext.Provider>
  );
}

export default App;
