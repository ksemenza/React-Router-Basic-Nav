import React from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/About.js" component={About} >
      <About/>      </Route>
    <Route path={"/Contact.js"} component={Contact}>
    <Contact/></Route>
  </div>
);

export default App;
