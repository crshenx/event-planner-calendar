// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./view/Login";
import SignUp from "./view/SignUp";
import Paperbase from "./view/Home";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/login")
      .then((r) => r.json())
      .then((d) => setCount(d.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route path="/testing">
            <h1>Test Route</h1>
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exactpath="/">
            <Paperbase />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
