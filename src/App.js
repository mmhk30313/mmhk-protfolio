import React, { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Particle from './Components/Home/Particle';
import Links from './Components/Links/Links';
import Works from './Components/Works/Works';
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = createContext();
function App() {
  const [page, setPage] = useState("")
  return (
    <div style={{height: 'fit-content'}}>
      <div style={{position: 'absolute', overflow: 'hidden',width: '100%', height: '100%'}}>
          <Particle/>
      </div>
      <div className="home">
        <UserContext.Provider value={[page, setPage]}>
            <Router>
                <Header/>
                <Switch>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/about">
                    <About></About>
                  </Route>
                  <Route path="/blog">
                    <Blog></Blog>
                  </Route>
                  <Route path="/works">
                    <Works></Works>
                  </Route>
                  <Route path="/contact">
                    <Contact></Contact>
                  </Route>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                </Switch>
              </Router>
            <Links/>
          </UserContext.Provider>
        </div>
    </div>
  );
}

export default App;
