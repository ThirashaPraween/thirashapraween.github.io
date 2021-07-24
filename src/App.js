import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
