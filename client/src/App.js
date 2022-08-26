// import logo from "./logo.svg";
// import "./App.css";
import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./view/Login";
import SignUp from "./view/SignUp";
import Paperbase from "./view/Home";
import { useRecoilState } from "recoil";
import { logIn } from "./view/atoms";

// const authContext = createContext();

// // Auth provider that renders children
// function ProvideAuth({ children }) {}

// export const useAuth = () => {
//   return useContext(authContext);
// };

// function useProvideAuth() {

// }

function App() {
  const [logInState, setLogInState] = useRecoilState(logIn);
  // console.log(logInState);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        console.log(r);
        r.json().then((user) => {
          const now = new Date();
          console.log(`fetch resolved at ${now.toString()} : ${Date.now()}`);
          setLogInState(user);
        });
      }
      // else {
      //   return <Redirect to="/login" />;
      // }
    });
  }, []);

  return (
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
        <Route path="/home">
          <Paperbase />
        </Route>
        <Route path="/">
          {/* <Landing /> */}
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
