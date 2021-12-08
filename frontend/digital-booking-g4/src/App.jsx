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
import ConfirmacionCuenta from "./components/ConfirmacionCuenta/ConfirmacionCuenta";
import Reservas from "./components/FavoritosYReservas/Reservas/Reservas";
import Administracion from "./components/Administracion/Administracion";
import AuthenticationVerify from "./components/AuthenticationVerify/AuthenticationVerify";

function App() {
  const [isLogged, setIsLogged] = useState(estaLogueado());
  const [userInformation, setUserInformation] = useState(
    obtenerInformacionUsuario()
  );
  const [rol, setRol] = useState(obtenerRolUsusario());

  AOS.init();

  useEffect(() => {}, [isLogged]);

  const cleanUserInfo = () => {
    localStorage.clear();
    setIsLogged(false);
  };

  return (
    <loggedContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userInformation,
        setUserInformation,
        rol,
        setRol,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/login-redirect-booking/:id" component={Login} />
              <Route path="/register" component={Register} />
              <Route
                path="/confirmAccount/:token"
                component={ConfirmacionCuenta}
              />
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
              <Route path="/management" component={Administracion} />
            </Switch>
          </Layout>
          <AuthenticationVerify cleanUserInfo={cleanUserInfo}/>
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

function obtenerRolUsusario() {
  return localStorage.hasOwnProperty("rol")
    ? JSON.parse(localStorage.getItem("rol"))
    : "";
}

export default App;
