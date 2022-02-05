import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'

//import './app.css'; 


const App = ()=>{	
    return (
    <Router>
       <main>
          <Route path="/about">
           <About/> 
         </Route>
          <Route path="/">
           <Home/> 
         </Route>
       </main>
     </Router>
    )
  }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
