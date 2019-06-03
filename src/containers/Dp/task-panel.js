import React, { Component } from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import AddTaskForm from './taskForm';
import { Modal } from 'react-bootstrap';
import TaskCard from './card';
import { handleOpen, handleClose, getData } from './actions.js';


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


class Task extends React.Component {


    componentDidMount() {
        this.props.getData(this.props.token)
    }

    render() {
        console.log("task propsL: ", this.props);

        return (
            <div>
                <div className="wrapper">

                    <div class="col-sm-12 abc">
                        <div class="row">
                            <div class="col-sm-7 five-three">
                                <div class="row">
                                    <div class="col-sm-4 q">
                                        REJECTED
                                    <hr className="line"></hr>
                                        <div >
                                            {
                                                this.props.rejected ?
                                                    this.props.rejected.map(function (elem) {
                                                        return <TaskCard title={elem.title} description={elem.description} id={elem.id} element={elem} />
                                                    }) :
                                                    ''
                                            }
                                        </div>

                                    </div>
                                    <div class="col-sm-4 w">
                                        PENDING
                                    <hr className="line"></hr>
                                        <div>
                                            {
                                                this.props.pending ?
                                                    this.props.pending.map(function (elem) {
                                                        return <TaskCard title={elem.title} description={elem.description} id={elem.id} element={elem} />
                                                    }) :
                                                    ''
                                            }
                                        </div>
                                    </div>
                                    <div class="col-sm-4 e" style={{ textAlign: "center" }}>
                                        DEVELOPMENT
                                    <hr className="line"></hr>
                                        <div>
                                            {
                                                this.props.development ?
                                                    this.props.development.map(function (elem) {
                                                        return <TaskCard title={elem.title} description={elem.description} id={elem.id} element={elem} />
                                                    }) :
                                                    ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-5 five-two">
                                <div class="row">
                                    <div class="col-sm-6 r">
                                        TESTING
                                    <hr className="line"></hr>
                                        <div>
                                            {
                                                this.props.testing ?
                                                    this.props.testing.map(function (elem) {
                                                        return <TaskCard title={elem.title} description={elem.description} id={elem.id} element={elem} />
                                                    }) :
                                                    ''
                                            }
                                        </div>

                                    </div>
                                    <div class="col-sm-6 t">
                                        PRODUCTION
                                    <hr className="line"></hr>
                                        <div>
                                            {
                                                this.props.production ?
                                                    this.props.production.map(function (elem) {
                                                        return <TaskCard title={elem.title} description={elem.description} id={elem.id} element={elem} />
                                                    }) :
                                                    ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>






                    <Modal show={this.props.openForm} onHide={() => { this.props.handleClose(false) }}>

                        <Modal.Header closeButton>
                            <Modal.Title>Create New Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddTaskForm status={this.props.taskStatus} dataHandler={this.props.getData}

                            />
                        </Modal.Body>

                    </Modal>

                </div>
                <div>
                    <footer class="page-footer font-small fixed-bottom">

                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-7 five-three">
                                    <div class="row">
                                        <div class="col-sm-4 ">
                                            <Button variant="contained" onClick={() => { this.props.handleOpen(true, 'REJECTED') }}>
                                                <AddIcon style={leftIcon} />
                                                Add a task
                                    </Button>
                                        </div>
                                        <div class="col-sm-4 ">
                                            <Button variant="contained" onClick={() => { this.props.handleOpen(true, 'PENDING') }}>
                                                <AddIcon style={leftIcon} />
                                                Add a task
                                    </Button>
                                        </div>
                                        <div class="col-sm-4 " style={{ textAlign: "center" }}>
                                            <Button variant="contained" onClick={() => { this.props.handleOpen(true, 'DEVELOPMENT') }}>
                                                <AddIcon style={leftIcon} />
                                                Add a task
                                    </Button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-5 five-two">
                                    <div class="row">
                                        <div class="col-sm-6 ">
                                            <Button variant="contained" onClick={() => { this.props.handleOpen(true, 'TESTING') }}>
                                                <AddIcon style={leftIcon} />
                                                Add a task
                                    </Button>
                                        </div>
                                        <div class="col-sm-6 ">
                                            <Button variant="contained" onClick={() => { this.props.handleOpen(true, 'PRODUCTION') }}>
                                                <AddIcon style={leftIcon} />
                                                Add a task
                                    </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </footer>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    openForm: state.postReducer.openForm,
    taskStatus: state.postReducer.taskStatus,
    formData: state.postReducer.formData,
    rejected: state.postReducer.rejected,
    pending: state.postReducer.pending,
    testing: state.postReducer.testing,
    development: state.postReducer.development,
    production: state.postReducer.production,
    updateData: state.postReducer.updateData,
    token: state.postReducer.token
})

export default connect(mapStateToProps, { handleOpen, handleClose, getData })(Task);

// Unsimplified Route Planning
// Create a script for maintaining planned routes for distinct stations and dispatch points
