import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
