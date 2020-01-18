import React,{Component} from 'react';
import './static/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Job } from "./pages/job";
import Navbar from './component/navbar'
import { Home } from "./pages/home";
import Aboutus from './pages/aboutUs';
import ContactUs from './pages/contactus';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path='/'  exact render={props => <Home {...props}/>} />
          <Route path='/jobs' exact render={props=><Job {...props}/>}/>
          <Route path='/about' exact render={props=><Aboutus {...props} />} />
          <Route path ='/contact' exact render={props=><ContactUs {...props} />}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export  default App