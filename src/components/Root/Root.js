import React, { Component } from "react";
import Login from "../Login";
import Map from "../Map";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import PetOwnerPage from '../PetOwnerPage';
import SignUp from '../SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'


class Root extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex", width: "100%" }}>
        
          <div
            style={{
              flexGrow: 1,
              minHeight: "100vh",
              padding: 20,
              boxSizing: 'border-box'
              
            }}
          >
          
          <Route path="/PetOwnerPage" component={PetOwnerPage} />  
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
          <Route path="/sign-up" component={SignUp} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default Root;
