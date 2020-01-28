import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="./components/About.js" component={About} >
      <About/>      </Route>
    <Route path={"./components/Contact.js"} component={Contact} />
  </div>
);

export default App;
