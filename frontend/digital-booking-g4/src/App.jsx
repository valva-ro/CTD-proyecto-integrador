import Layout from "./componentes/Layout/Layout";
//import Home from "./componentes/Home/Home";
//import { Router, Route, IndexRoute, brouserHistory } from "react-router-3"

function App() {
  return (
    <div className="App">
      <Layout/>
      {/* <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/login" component={Login} />
        </Route>
      </Router> */}
    </div>
  );
}

export default App;
