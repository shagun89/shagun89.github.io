import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { handleChangeDesc, handleChangeTitle, handleChangeStatus, updateFormdata, getData, handleEditClick, handleSnack} from './actions.js';

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
    minWidth: 400,
    marginTop: 10
}



class UpdateTaskForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      valTitle : this.props.prevTitle,
      valDesc : this.props.prevDesc,
      valStatus : this.props.prevStatus
    }
   }

    handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            title : this.state.valTitle,
            description : this.state.valDesc,
            status: this.state.valStatus
        }
        // alert('Submitted data ' + this.state.valTitle + ' ' + this.state.valDesc + '' +this.state.valStatus);
        this.props.updateFormdata(data, this.props.taskId, this.props.token)
        this.props.getData(this.props.token)
        this.props.handleEditClick(!this.props.editstatus, this.props.targetEl, this.props.formData)
    } 
    
  render() {
    console.log("Update props: " + this.props.taskId);
    return (

      <div>
        
      <form style={container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      <div>
        <TextField 
          id="standard-name"
          label="Title"
          name="title"
          style={textField}
          placeholder={this.state.prevTitle}
          value = {this.state.valTitle}
          onChange={(event) => this.setState({valTitle:event.target.value})}
          margin="normal"
        />
      </div>
      <div >
        <TextField
          id="standard-uncontrolled"
          label="Description"
          name="description"
          placeholder ={this.props.prevDesc}
          value = {this.state.valDesc}
          multiline = {true}
          style={textField}
          onChange={(event) => this.setState({valDesc:event.target.value})}
          margin="normal"
        />
      </div>
      <div>
      <FormControl style={formControl}>
        <InputLabel>Status</InputLabel>
        <Select
        value={this.state.valStatus}
        onChange={(event) => this.setState({valStatus:event.target.value})}
        >
          <MenuItem value={"REJECTED"}>REJECTED</MenuItem>
          <MenuItem value={"PENDING"}>PENDING</MenuItem>
          <MenuItem value={"DEVELOPMENT"}>DEVELOPMENT</MenuItem>
          <MenuItem value={"TESTING"}>TESTING</MenuItem>
          <MenuItem value={"PRODUCTION"}>PRODUCTION</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
        
      <Button variant= "contained" color="primary" style={button} type="submit">Save</Button>

      </div>
      </form>
    </div>
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
    isError: state.postReducer.isError
})

export default connect(mapStateToProps, { handleChangeTitle, handleChangeDesc, handleChangeStatus, updateFormdata, getData, handleEditClick, handleSnack })(UpdateTaskForm);

