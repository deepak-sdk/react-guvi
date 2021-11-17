import "./App.css";
import { Counter } from "./counter/counter";
// import { Msg } from './Msg/Msg';
import { Switch, Link, Route, Redirect } from "react-router-dom";
import { ColorBox } from "./colorBox/ColorBox";



export default function App() {
  return (
    <div className="App">
      {/* <Msg /> */}

      {/* Counter 02-11-2021 */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counters">Counter</Link>
        <Link to="/color-box">Color</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          Welcome🏘️
        </Route>
        <Route path="/counter">
          <Redirect to="/counters" />
        </Route>
        <Route path="/counters">
          <Counter />
        </Route>
        <Route path="/color-box">
          <ColorBox />
        </Route>
        <Route path="**">
          Not Found 404
        </Route>
      </Switch>
    </div>
  );
}

// Creating Components
// First Letter Caps
// return JSX

//App - component can created by
//1. function component
//2. class component

// jsx -> javascript xml / javascript extented
// domain-specific language called JSX.

//noscript
// If JS is disabled in browser, content inside noscript will be displayed
