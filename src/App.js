import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './App.css';

import firebase from 'firebase/app'
import 'firebase/auth'

import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import NotFound from './Pages/NotFound'
import { UserContext } from './Context/UserContext';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header'
import FirebaseConfig from './Config/FirebaseConfig';

firebase.initializeApp(FirebaseConfig);

function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/SignIn" component={SignIn}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
