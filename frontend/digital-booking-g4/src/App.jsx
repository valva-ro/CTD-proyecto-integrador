import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Forms/Login"
import Register from "./components/Forms/Register"
import { Router, Route, IndexRoute, browserHistory } from "react-router-3"

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
