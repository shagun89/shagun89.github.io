import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRegister, searchData, logoutScrum, getData, handleClose, handleOpen} from './actions.js';
import './styles.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import Task from './task-panel';
import ls from 'local-storage';
import { Modal } from 'react-bootstrap';
import AddTaskForm from './taskForm';

class Board extends Component {
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
      this.props.getData(this.props.token, 'http://192.168.36.64:8080/user/other-tasks');
    }
  }

  handleAddAction = (evt) => {
    if(evt == "rejected")
    this.props.handleOpen(true, "REJECTED")
    else if(evt == "pending")
    this.props.handleOpen(true, "PENDING")
    else if(evt == "development")
    this.props.handleOpen(true, "DEVELOPMENT")
    else if(evt == "testing")
    this.props.handleOpen(true, "TESTING")
    else if(evt == "production")
    this.props.handleOpen(true, "PRODUCTION")

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
              <Form inline onChange = {(event) => this.setState({searchVal:event.target.value})} onSubmit={(event)=>event.preventDefault()}>
              <FormControl type="text" placeholder="Search tasks, cards ..." className="mr-sm-2" />
              <Button variant="outline-info" onClick={()=>this.props.searchData(this.state.searchVal)}>Search</Button>
               </Form>
              </Nav>
              <Nav>
              <NavDropdown title="Add Task" id="collasible-nav-dropdown" onSelect = {(event) => this.handleAddAction(event)}>
              <NavDropdown.Item eventKey="rejected">Rejected</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="pending">Pending</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="development">Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="testing">Testing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="production">Production</NavDropdown.Item>
              
               </NavDropdown>
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
        <Modal show={this.props.openForm} onHide={() => { this.props.handleClose(false) }}>

          <Modal.Header closeButton>
            <Modal.Title>Create New Task</Modal.Title>
              </Modal.Header>
                <Modal.Body>
                  <AddTaskForm status={this.props.taskStatus} dataHandler={this.props.getData}/>
          </Modal.Body>

          </Modal>
        <Task />
    </div>   
    );
  }
}


const mapStateToProps = state => ({
  isRegister : state.postReducer.isRegister,
  token: state.postReducer.token,
  taskStatus: state.postReducer.taskStatus,
  openForm: state.postReducer.openForm,
})

export default connect(mapStateToProps, {showRegister, searchData, logoutScrum, getData, handleOpen, handleClose})(Board);
