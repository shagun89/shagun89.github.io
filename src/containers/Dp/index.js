import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRegister, searchData, giveOtherTasks, logoutScrum } from './actions.js';
import './styles.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import Task from './task-panel';
import ls from 'local-storage';

class Dp extends Component {
  constructor(props){
    super(props);
    this.state={
      searchVal: ""
    }
   }

  handleAction = (evt) => {
    if(evt == "logout")
    {
      this.props.logoutScrum();
      ls.remove('token'); 
      this.props.showRegister(this.props.isRegister);
    }
    else
    {
      this.props.giveOtherTasks();
    }
  }
  render() {
    console.log("props :", this.props);
    
    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Scrum-Board</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Form inline onChange = {(event) => this.setState({searchVal:event.target.value})}>
              <FormControl type="text" placeholder="Search tasks, cards ..." className="mr-sm-2" />
              <Button variant="outline-info" onClick={()=>this.props.searchData(this.state.searchVal)}>Search</Button>
               </Form>
              </Nav>
              <Nav>
              <NavDropdown title="Account" id="collasible-nav-dropdown" onSelect = {(event) => this.handleAction(event)}>
              <NavDropdown.Item eventKey="mytasks">Alloted Tasks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="logout">Logout</NavDropdown.Item>
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
  isRegister : state.postReducer.isRegister,
})

export default connect(mapStateToProps, {showRegister, searchData, giveOtherTasks, logoutScrum})(Dp);
