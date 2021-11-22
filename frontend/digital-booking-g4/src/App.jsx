import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import TarjetaReservaExitosa from "./components/TarjetaReservaExitosa/TarjetaReservaExitosa.jsx";
import Producto from "./components/Producto/Producto.jsx";
import Favoritos from "./components/Favoritos/Favoritos";
import ScrollToTop from "./components/ScrollToTop";
import loggedContext from "./contexts/loggedContext";
import AOS from "aos";
import "aos/dist/aos.css";

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
              <Route path="/product/:id" component={Producto} />
              <Route path="/favorites" component={Favoritos} />
              <Route path="/success" component={TarjetaReservaExitosa} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </loggedContext.Provider>
  );
}

export default App;
