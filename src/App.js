import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Gallery from './components/pages/Gallery/Gallery';
import AboutUs from './components/pages/About Us/AboutUs';
import SignUp from './components/pages/Sign Up/SignUp';
import Login from './components/pages/Login/Login';
import LoginAdmin from './components/pages/Login/Admin/Login/LoginAdmin'; 
import ULogin from './components/pages/Login/UserLogin/Login/ULogin';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';

//In this we are basically routing means whatever compenent we already wrote in
// in Home.js, SignUp.js, etc they will be shown here
function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
           {/*We are passing content of HeroSEction on main page */}
            <Route path = '/' exact component = {Home}/> 
            <Route path='/sign-up' component={SignUp} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/log-in' component={Login} />
            <Route path='/Admin' component={LoginAdmin} />
            <Route path='/login-user' component={ULogin} />
                
        </Switch>
        <Footer />
     </Router> 
    
  );
};

export default App;
