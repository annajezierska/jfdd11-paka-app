import React, { Component } from 'react'

import './PetOwner.css'
import PetOwnerFeatures from '../PetOwnerFeatures/PetOwnerFeatures';

class PetOwner extends Component {

  state = {
    name: '',
    surname: '',
    dogsname: '',
    age: '',
    sex: '',
    breed: ''

  }

  handleChange = event => {
    const fieldName = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    this.setState({
      [fieldName]: value,
    });
  };



  render() {
    return (
      <div className="PetOwnerPage"><p>PetOwnerPagee</p>
        <form>
          <div className="inputWraper">
          
            <div className="inputSmallWraper">Owner's name and surname
              <input 
              value={this.state.name} 
              className="inputSmall"   
              type="text"   
              placeholder="Name"    
              name="name"    
              onChange={this.handleChange}
              />

              <input 
              value={this.state.surname} 
              className="inputSmall"
              type="text"   
              placeholder="Surname" 
              name="surname" 
              onChange={this.handleChange}
              />

              Info about dog
              <input 
              value={this.state.dogsname}  
              className="inputSmall"   
              type="text"   
              placeholder="Dog's name"    
              name="dogsname"    
              onChange={this.handleChange}
              />

              <input 
              value={this.state.age}   
              className="inputSmall"  
              type="number" min="1" max="25" 
              placeholder="Age"     name="age"     
              onChange={this.handleChange}
              />

              <input 
              value={this.state.sex}   
              className="inputSmall"  
              type="text"   
              placeholder="Sex"     
              name="sex"     
              onChange={this.handleChange}
              />
              
              <input 
              value={this.state.breed} 
              className="inputSmall"  
              type="text"   
              placeholder="Breed"   
              name="breed"   
              onChange={this.handleChange}
              />
              
            </div>
            <input type="file" alt="Your dog's picture" className="photoInput"/>
          </div>
          <p>Short description of your dog:</p>
          <textarea rows= "4" ></textarea>
          <PetOwnerFeatures/>

          <button className="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PetOwner
