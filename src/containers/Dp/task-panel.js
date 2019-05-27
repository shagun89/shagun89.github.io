import React, { Component } from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import AddTaskForm from './taskForm';
import { Modal } from 'react-bootstrap';
import TaskCard from './card';
import { handleOpen, handleClose, getData , postFormdata} from './actions.js';

const button_style = {
    margin: '0px',
    color: 'navy',
    padding: '0 10px',
}
const leftIcon = {
    marginRight: '10px',
}
const button = {
    margin: '0px',
     padding: '0 10px',
     radius: '12px',
     fontSize: '20px',
     marginLeft: '10px',
     marginTop: '30px'
}

class Task extends React.Component{

    renderDivdata = (str) => {
        console.log(str);
        return(
            
            this.props.formData.status === str ? this.props.formData.title : ''
        )
    }
    
    // }
    render() {
        console.log("task propsL: ",this.props);
        console.log(this.props.formData && this.props.formData.status == 'Rejected' ? true : false)
        return (
        <div className="wrapper">
        <header className="clear">
          <ul>
            <li>Rejected</li>
            <li>Pending</li>
            <li>Development</li>
            <li>Testing</li>
            <li>Production</li>
          </ul>
          
        </header>
        
        {/* <section id="dashboard" className="dashboard clear">
          <div id="rejected" className="rejected"></div>
          <div id="pending" className="pending">thee</div>
          <div id="development" className="development">yh</div>
          <div id="testing" className="testing">hy</div>
          <div id="production" className="production">hb</div>
        </section> */}
        <div className="row">
  <div className="column rejected" >
  {this.props.receiveData && this.props.receiveData["status"] == 'REJECTED' ? <TaskCard title = {this.props.receiveData["title"]} description = {this.props.receiveData["description"]}/> : ''}
  </div>
  <div className="column pending" >
  {this.props.receiveData && this.props.receiveData["status"] == 'PENDING' ? <TaskCard title = {this.props.receiveData["title"]} description = {this.props.receiveData.description}/> : ''}
  </div>
  <div className="column development" >
  {this.props.receiveData && this.props.receiveData["status"] == 'DEVELOPMENT' ? <TaskCard title = {this.props.receiveData["title"]} description = {this.props.receiveData.description}/> : ''}
  </div>
  <div className="column testing" >
  {this.props.receiveData && this.props.receiveData["status"] == 'TESTING' ? <TaskCard title = {this.props.receiveData["title"]} description = {this.props.receiveData.description}/> : ''}
  </div>
  <div className="column production" >
  {this.props.receiveData && this.props.receiveData["status"] == 'PRODUCTION' ? <TaskCard title = {this.props.receiveData["title"]} description = {this.props.receiveData.description}/> : ''}
  </div>
</div>
        <div id="page-container">
          
          <footer id= "footer">
          <ul>
            <li>
            <Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'REJECTED')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button>
            </li>
            <li><Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'PENDING')}}>
            <AddIcon style={leftIcon} />
            Add a task
            
            </Button></li>
            <li ><Button variant="contained" style= {button_style} onClick={() => {this.props.handleOpen(true, 'DEVELOPMENT')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button></li>
            <li ><Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'TESTING')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button></li>
            <li><Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'PRODUCTION')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button></li>
          </ul>
          </footer>
        </div>
        
{/*       
        <Modal 
        show={this.props.openForm} onHide={() => {this.props.handleClose(false)}}
        >
        {console.log(this.props.openForm)}
        <AddTaskForm  />
        getData = {this.props.getData}
        </Modal> */}

<Modal show={this.props.openForm} onHide={()=>{this.props.handleClose(false)}}>
        
          <Modal.Header closeButton>
            <Modal.Title>Create New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <AddTaskForm status = {this.props.taskStatus} dataHandler = {this.props.postFormdata}
              
              />
          </Modal.Body>
          
</Modal>
        
        </div>
        );
    }
}

const mapStateToProps = state => ({
    openForm: state.postReducer.openForm,
    taskStatus: state.postReducer.taskStatus,
    formData :  state.postReducer.formData,
    receiveData : state.postReducer.receiveData
    
})

export default connect(mapStateToProps, { handleOpen, handleClose, getData, postFormdata })(Task);

// Unsimplified Route Planning
// Create a script for maintaining planned routes for distinct stations and dispatch points