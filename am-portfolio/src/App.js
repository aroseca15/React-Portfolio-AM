import React from 'react';
import '../src/App.css';
import Footer from './components/Footer';
import Header from './components/Headers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (<BrowserRouter>
    <main className="App">
      <Header />
      <Switch>
        <Route exact path= "/">{Home}</Route>
        <Route exact path= "/about">{About}</Route>
        <Route exact path= "/portfolio">{Portfolio}</Route>
        <Route exact path= "/contact">{Contact}</Route>
      </Switch>
      
      <Footer />
    </main>
  </BrowserRouter>);
  // return React.createElement('div', null, React.createElement('h1', {className: "App"}, 'Hi, this is the start of my professional portfolio. Getting educated.'));
}

export default App;
