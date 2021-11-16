import ProductoLayout from "./ProductoLayout/ProductoLayout";
import ProductoDetalle from "./ProductoDetalle/ProductoDetalle";
import ProductoReserva from "./ProductoReserva/ProductoReserva";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Producto() {
  return (
    <BrowserRouter>
      <ProductoLayout>
        <Switch>
          <Route exact path="/product/:id" component={ProductoDetalle} />
          <Route path="/product/:id/booking" component={ProductoReserva} />
        </Switch>
      </ProductoLayout>
    </BrowserRouter>
  );
}
