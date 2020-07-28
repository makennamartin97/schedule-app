import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import ScheduleForm from "./components/ScheduleForm";
import EditSchedule from "./components/EditSchedule";
import Surprise from "./components/Surprise";
import { Link, navigate, Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-info">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand text-primary" to="/">myschedule.com</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link text-light" to="/">Home</Link>
            <Link className="nav-item nav-link text-light" to="/new">Add a New Event</Link>
            <a className="nav-item nav-link text-primary" href="/surprise">Today is a good day to have a good day!</a>
          </div>
        </div>
      </nav>

  

      <Router>
        <Dashboard path="/"/>
        <ScheduleForm path="/new"/>
        <EditSchedule path="/edit/:_id"/>
        <Surprise path="/surprise" />
      

      </Router>
      
      <div className="footer text-left text-secondary my-5">
        <p>myschedule.com - @2020</p>
      </div>
    
    </div>
  )
}

export default App;
