import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Producto from "./components/Producto/Producto.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import loggedContext from "./contexts/loggedContext";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ProductoLayout from "./components/Producto/ProductoLayout/ProductoLayout";
import ProductoDetalle from "./components/Producto/ProductoDetalle/ProductoDetalle";
import ProductoReserva from "./components/Producto/ProductoReserva/ProductoReserva";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <loggedContext.Provider value={{ isLogged, setIsLogged }}>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/product/detalle/:id">
                <ProductoLayout>
                  <ProductoDetalle />
                </ProductoLayout>
              </Route>
              <Route path="/product/reserva/:id">
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
