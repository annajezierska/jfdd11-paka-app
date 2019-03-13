import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import firebase from "firebase";
import { withRouter, NavLink as RNavLink} from "react-router-dom";
import homezoonew from "../images/homezoonew.png";

import "./NavigationBar.css";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logOut = () => {
    console.log('logging out')
    firebase
      .auth()
      .signOut()
      .then(() => {
        setTimeout(() => {
          this.props.history.push("/");
        }, 0)
        
      });
  };

  render() {
    const currentUser = firebase.auth().currentUser 
    if (currentUser === null) {
      return null
    }
    const userId = currentUser.uid;
    return (
      <div className="NavigationBar">
        <Navbar color="light" light expand="md">
          <NavbarBrand
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline"
            }}
          >
            {" "}
            <img className="Nav-login-logo" src={homezoonew} alt="logo" onClick={() => this.props.history.push("/users")} />
            <span
              className="Nav-span"
              style={{
                fontSize: "60",
                color: "#f36f5a",
                fontWeight: "bolder",
                fontFamily: 'monospace'
              }}
            >
              HomeZoo
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/pets">User's pets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/registerpet" tag={RNavLink}>Register-Pet</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/map/" tag={RNavLink}>Map</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`/users/${userId}`} tag={RNavLink}>
                  My profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/users/" tag={RNavLink}>Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/chat">Chat</NavLink>
              </NavItem>
              <NavItem onClick={this.logOut}>
                <NavLink>Log out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
 

export default withRouter(NavigationBar);
