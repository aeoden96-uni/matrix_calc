
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import UserComponent from './components/UserComponent';
import LoginForm from './components/LoginForm';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LexerComponent from './components/LexerComponent';
import MainComponent from './components/MainComponent';
import InputAritmComponent from './components/InputAritmComponent';
import InputMatrixComponent from './components/InputMatrixComponent';

function App() {

  /*const adminUser = {
    email: "a@a.com",
    password: "a"
  }*/
  //const [user, setUser] = useState({ name: "", email: "" });
  const [setError] = useState("");

  async function Login(details) {
    console.log(setError);


    let result = await fetch(
      "http://localhost:8080/api/login",
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(details)
      });
    result = await result.json();
    console.log("Login result: " + result);

    if (result) {
      localStorage.setItem("user-info", JSON.stringify(details));
      window.location.reload();
    }

    //console.log(JSON.parse(localStorage.getItem("user-info")).email);
    /*if (details.password === adminUser.password) {
      console.log("Login");
      console.log(details);
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("details dont match");
    }*/
  }
  const Logout = () => {
    console.log(JSON.parse(localStorage.getItem("user-info")));
    //setUser({ name: "", email: "" });
    localStorage.removeItem('user-info');
    window.location.reload();

  }

  return (

    <div className="App">
      {(JSON.parse(localStorage.getItem("user-info")) != null) ? (
        <div>
          <Router>
            <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path="/" exact component={MainComponent}></Route>
                <Route path="/employees" exact component={LexerComponent}></Route>
                <Route path="/add-employee/" exact component={LexerComponent}></Route>
                <Route path="/input-aritm/" exact component={InputAritmComponent}></Route>
                <Route path="/input-matrix/:sizeAx/:sizeAy/:sizeBx/:sizeBy" component={InputMatrixComponent}></Route>
                <Route path="/input-matrix/:sizeAx/:sizeAy" component={InputMatrixComponent}></Route>
                <Route path="/input-matrix/" exact component={InputMatrixComponent}></Route>
                <Route path="/lexer" exact component={LexerComponent}></Route>
                {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
              </Switch>
            </div>
            <FooterComponent Logout={Logout} />
          </Router>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>



  );
}

export default App;


/**
 * <Route path="/" exact component={ListEmployeeComponent}></Route>
 *             <Route path="/employees" component={ListEmployeeComponent}></Route>
 *             <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
 *             <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
 *
 *
 *
*
*
*/