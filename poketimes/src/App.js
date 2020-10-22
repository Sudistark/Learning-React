import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
         {/*Had to use exact because it was loading all the 3 components in the same page one below another*/}
        <Route path='/contacts.html' component={Contact}/>
        <Route path='/about.html' component={About}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
