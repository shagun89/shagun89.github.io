import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.scss';
import { handleChangeDesc, handleChangeTitle, handleChangeStatus, updateFormdata, getData, handleEditClick} from './actions.js';


const container = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    margin: '20px',
}

const textField = {
    marginLeft: '5px',
    marginRight: '5px',
    width: 400,
}

const button = {
    margin: '0px',
     padding: '0 10px',
     radius: '12px',
     fontSize: '20px',
     marginLeft: '50px',
     marginTop: '30px'
}

const push_down = {
    marginTop : 20,
    marginLeft : 7
}

const formControl = {
    margin: '5px',
    minWidth: 120,
    marginLeft : -5
}



class UpdateTaskForm extends React.Component {


    handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            title : this.props.title,
            description : this.props.description,
            status: this.props.stat
        }
        // alert('Submitted data ' + this.props.title + ' ' + this.props.description + '' +this.props.stat);
        this.props.updateFormdata(data, this.props.taskId, this.props.token)
        this.props.getData(this.props.token)
        this.props.handleEditClick(!this.props.editstatus, this.props.targetEl, this.props.formData)
    } 
    
  render() {
    console.log("Update props: " + this.props.taskId);
    return (
      
      <form style={container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
    
      <div>
        <TextField 
          id="standard-name"
          label="Title"
          name="title"
          style={textField}
          placeholder={this.props.prevTitle}
          onChange={(event) => this.props.handleChangeTitle(event.target.value)}
          margin="normal"
        />
      </div>
      <div >
        <TextField
          id="standard-uncontrolled"
          label="Description"
          name="description"
          placeholder ={this.props.prevDesc}
          multiline = {true}
          style={textField}
          onChange={(event) => this.props.handleChangeDesc(event.target.value)}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="standard-name"
          label="Status"
          name="stat"
          style={textField}
          placeholder={this.props.prevStatus}
          onChange={(event) => this.props.handleChangeStatus(event.target.value)}
          margin="normal"
        />
      </div>
      <div>
        
        <Button variant= "contained" color="primary" style={button} type="submit">Save</Button>

        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
    title: state.postReducer.title,
    description: state.postReducer.description,
    stat: state.postReducer.stat,
    edit: state.postReducer.edit,
    formData: state.postReducer.formData,
    token: state.postReducer.token,
   
})

export default connect(mapStateToProps, { handleChangeTitle, handleChangeDesc, handleChangeStatus, updateFormdata, getData, handleEditClick })(UpdateTaskForm);

