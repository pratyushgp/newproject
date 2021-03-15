import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Menu from './Menu';

import {Redirect, Route, Switch} from "react-router-dom";
import Footer from './Footer';

function App() {
  return (
    <>
  <Menu />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Services}/>

      <Route exact path='/contact' component={Contact}/>
<Redirect to='/'/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
