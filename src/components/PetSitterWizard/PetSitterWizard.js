import React, { Component } from "react";

import { Button, Fade } from 'reactstrap';

import "./PetSitterWizard.css";

import PetSitterFeatures from "../PetSitterFeatures";

import PetSitter from "../PetSitter";

import firebase from "firebase";

import { Link } from 'react-router-dom';
import { Target } from "react-popper";

class PetSitterWizard extends Component {
  state = {
    name: "",
    surname: "",
    age: "",
    adress: "",
    description: "",
    schedule: false,
    daycare: false,
    housesitting: false,
    visits: false,
    positionx: "",
    positiony: "",
  };

  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
}
  
  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      surname,
      age,
      adress,
      description,
      schedule,
      daycare,
      housesitting,
      visits,
      file,
      positionx,
      positiony
    } = this.state;
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("users")
      .child(userId)
      .set({
        name,
        surname,
        age,
        adress,
        description,
        schedule,
        daycare,
        housesitting,
        visits,
        positionx: parseFloat(positionx) || 0,
        positiony: parseFloat(positiony) || 0
      }).catch(error => this.setState({ error: error, success: null }))

    // More info about uploading files:
    // https://firebase.google.com/docs/storage/web/upload-files
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(`${userId}.jpg`);
    ref.put(file).then(data =>
      data.ref.getDownloadURL().then(url =>
        firebase
          .database()
          .ref("users")
          .child(userId)
          .child("photo")
          .set(url)
      )
    );
  };


  handleNameChange = name => {
    this.setState({ name });
  };

  handleSurnameChange = surname => {
    this.setState({ surname });
  };

  handleAgeChange = age => {
    this.setState({ age });
  };

  handleFileSelected = file => {
    this.setState({ file });
  };

  handleAdressChange = adress => {
    this.setState({ adress });
  };

  handleDescriptionChange = description => {
    this.setState({ description });
  };

  handleScheduleChange = schedule => {
    this.setState({ schedule });
  };

  handleDaycareChange = daycare => {
    this.setState({ daycare });
  };

  handleHousesittingChange = housesitting => {
    this.setState({ housesitting });
  };

  handleVisitsChange = visits => {
    this.setState({ visits });
  };

  handlePositionXChange = positionx => {
    this.setState({ positionx });
  };

  handlePositionYChange = positiony => {
    this.setState({ positiony });
  };

  toggle() {
    this.setState({
        fadeIn: !this.state.fadeIn
    })
  }

  render() {
     
   
   
    return (
      // <Switch>
      // <Route exact path="/petsitter" render={() => {
      //   return <PetSitter onNameChange={this.handleNameChange} />
      // }} />
      // <Route exact path="/petsitter/petsitterfeatures" render={() => {
      //   return <PetSitterFeatures onSubmit={this.handleSubmit} />
      // }} />
      // </Switch>
      <>
        <form onSubmit={this.handleSubmit}>
          <PetSitter
            onNameChange={this.handleNameChange}
            onSurnameChange={this.handleSurnameChange}
            onAgeChange={this.handleAgeChange}
            onAdressChange={this.handleAdressChange}
            onDescriptionChange={this.handleDescriptionChange}
            onFileSelected={this.handleFileSelected}
          />
          <PetSitterFeatures
            onSubmit={this.handleSubmit}
            onScheduleChange={this.handleScheduleChange}
            onDaycareChange={this.handleDaycareChange}
            onHousesittingChange={this.handleHousesittingChange}
            onVisitsChange={this.handleVisitsChange}
            onPositionXChange={this.handlePositionXChange}
            onPositionYChange={this.handlePositionYChange}
          />
          <Button color="warning" type="submit" onClick= {this.toggle} tag={Link} to="/myprofile" >Submit</Button>
          <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    Thanks, mate!
                </Fade>


        </form>
      </>
    );


    

  }
}

export default PetSitterWizard;
