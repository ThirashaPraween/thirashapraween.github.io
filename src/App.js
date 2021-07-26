import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Supports from "./pages/Supports";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/supports" component={Supports} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
