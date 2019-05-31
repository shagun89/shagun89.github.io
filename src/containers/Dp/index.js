import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddMenuClose, handleMenuClose, handleAddMenuOpen, handleProfileMenuOpen, showRegister } from './actions.js';
import './styles.scss';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { darkWhite } from 'material-ui/styles/colors';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import Task from './task-panel';
import ls from 'local-storage';

class Dp extends Component {

  render() {
    console.log("props :", this.props);
    
    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Scrum-Board</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Form inline>
              <FormControl type="text" placeholder="Search tasks, cards ..." className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
               </Form>
              </Nav>
              <Nav>
              <NavDropdown title="Account" id="collasible-nav-dropdown" onSelect = {() => {ls.remove('token');this.props.showRegister(this.props.isRegister)}}>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
               </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>;
        <Task />
    </div>   
    );
  }
}


const mapStateToProps = state => ({
  anchorEl: state.postReducer.anchorEl,
  addanchorEl : state.postReducer.addanchorEl,
  isRegister : state.postReducer.isRegister,
})

export default connect(mapStateToProps, { handleAddMenuClose, handleMenuClose, handleAddMenuOpen, handleProfileMenuOpen, showRegister})(Dp);

