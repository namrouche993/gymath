
import React from 'react'
import Mainwithnav from './Mainwithnav';
import Home from './Home'
import About from './About'
import News from './News'
import Contact from './Contact'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
  
export default function App() {
  return (
    <div>
      <Router>
        <Mainwithnav/>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

        </Switch>
      </Router>
    </div>
  )
}
