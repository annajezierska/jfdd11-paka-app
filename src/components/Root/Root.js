import React, { Component } from "react";
import Login from "../Login";
import Map from "../Map";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PetOwnerFeatures from '../PetOwnerFeatures';
import PetOwner from '../PetOwner';
import SignUp from '../SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfessionSelection from "../ProfessionSelection";
import PetSitterWizard from "../PetSitterWizard";

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
            <Route exact path="/" component={Login} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/profession-selection" component={ProfessionSelection} />
            <Route path="/petowner/petownerfeatures" component={PetOwnerFeatures} />
            <Route exact path="/petowner" component={PetOwner} />
            <Route path="/petsitter" component={PetSitterWizard} />

          </div>
        </div>
      </Router>
    );
  }
}

export default Root;
