import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import './styles.scss';
import { handleChangeDesc, handleChangeTitle, handleChangeStatus} from './actions.js';
import TaskCard from './card';


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
            status : this.props.stat
        }
        alert('Submitted data ' + this.props.title + ' ' + this.props.description + ' ' + this.props.stat);
        this.props.dataHandler(data);
        
    } 
    
  render() {
    
        // const [selectedValue, setSelectedValue] = React.useState('a');
      
        function handleChange(event) {
          setSelectedValue(event.target.value);
        }
    return (
      
      <form style={container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      
      <div>
        <TextField
          id="standard-name"
          label="Title"
          style={textField}
          value = {this.props.title}
          onChange={(event) => this.props.handleChangeTitle(event.target.value)}
          margin="normal"
        />
      </div>
      <div >
        <TextField
          id="standard-uncontrolled"
          label="Description"
          name="description"
          value = {this.props.description}
          multiline = {true}
          style={textField}
          onChange={(event) => this.props.handleChangeDesc(event.target.value)}
          margin="normal"
        />
      </div>
      <div style={push_down}>

      <FormControl style={formControl}>
      <FormLabel component="legend">Status</FormLabel>
        {/* <InputLabel htmlFor="age-simple">Status</InputLabel> */}
        <Select
        value =  {this.props.stat}   
        onChange = {(event) => this.props.handleChangeStatus(event.target.value)}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Rejected"}>Rejected</MenuItem>
          <MenuItem value={"Pending"}>Pending</MenuItem>
          <MenuItem value={"Development"}>Development</MenuItem>
          <MenuItem value={"Testing"}>Testing</MenuItem>
          <MenuItem value={"Production"}>Production</MenuItem>
        </Select>
      </FormControl>

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
    stat : state.postReducer.stat
})

export default connect(mapStateToProps, { handleChangeTitle, handleChangeDesc, handleChangeStatus })(UpdateTaskForm);

