import React, { Fragment } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Footer from './layout/Footer';
import MainBox from './layout/mainBox';
import Mainbox2 from './layout/mainbox2';
import Mainbox3 from './layout/mainbox3';
import Main, { main } from './layout/main';
import login from './layout/Login';
import ignup from './layout/Signup';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Signup from './layout/Signup';
function App() {
  return (
    <Router>
    <Fragment >
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch >
        <Route exact path='/second' component={Mainbox2} />
        <Route exact path='/login' component={login} />
        <Route exact path='/Signup' component={Signup} />
        </Switch> 
      </section>
      <Footer /> 
      
    </Fragment>

    </Router>
  );
}

export default App;
