import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Favoritos from "./components/FavoritosYReservas/Favoritos/Favoritos";
import ScrollToTop from "./components/ScrollToTop";
import loggedContext from "./contexts/loggedContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductoLayout from "./components/Producto/ProductoLayout/ProductoLayout";
import ProductoDetalle from "./components/Producto/ProductoDetalle/ProductoDetalle";
import ProductoReserva from "./components/Producto/ProductoReserva/ProductoReserva";
import Reservas from "./components/FavoritosYReservas/Reservas/Reservas";
import jwtDecode from "jwt-decode";

function App() {
  AOS.init();
  const [isLogged, setIsLogged] = useState(estaLogueado());
  const [userInformation, setUserInformation] = useState(
    obtenerInformacionUsuario()
  );
  let token = "";
  if (localStorage.hasOwnProperty("jwt")) {
    token = localStorage.getItem("jwt").replaceAll('"', "");
  }

  useEffect(() => {
    setInterval(function () {
      comprobarToken();
    }, 1000 * 60 * 10);
  }, []);

  useEffect(() => {}, [isLogged]);

  const comprobarToken = () => {
    if (token === "") {
      localStorage.clear();
      setIsLogged(false);
    } else {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.clear();
        setIsLogged(false);
      }
    }
  };

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
              <Route path="/reservations" component={Reservas} />
              <Route path="/product/:id/features">
                <ProductoLayout>
                  <ProductoDetalle />
                </ProductoLayout>
              </Route>
              <Route path="/product/:id/booking">
                {!isLogged ? (
                  <Redirect to="/" />
                ) : (
                  <ProductoLayout>
                    <ProductoReserva />
                  </ProductoLayout>
                )}
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </loggedContext.Provider>
  );
}

function estaLogueado() {
  return localStorage.getItem("jwt") != null;
}

function obtenerInformacionUsuario() {
  return {
    nombre: localStorage.hasOwnProperty("nombre")
      ? JSON.parse(localStorage.getItem("nombre"))
      : "",
    apellido: localStorage.hasOwnProperty("apellido")
      ? JSON.parse(localStorage.getItem("apellido"))
      : "",
  };
}

export default App;
