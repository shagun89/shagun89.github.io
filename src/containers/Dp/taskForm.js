import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { handleChangeDesc, handleChangeStatus, handleChangeTitle, handleOnClose, postFormdata} from './actions.js';


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
     padding: '0 20px',
     radius: '12px',
     fontSize: '20px',
     marginLeft: '10px',
     marginTop: '30px'
}

const button_clear = {
    margin: '0px',
    padding: '0 10px',
    radius: '12px',
    fontSize: '17px',
    marginLeft: '10px',
    marginTop: '30px'
}


class AddTaskForm extends React.Component {

//   state = {
    
//     title: '',
//     description: '',
//     stat: ''
//   };

//   handleChange = title => event => {
//     this.setState({ [title]: event.target.value });
//   };
//   handleChange = description => event => {
//     this.setState({ [description]: event.target.value });
//   };
//   handleChangeStatus = stat => event => {
//     this.setState({ [stat]: this.props.status });
//   };

  handleSubmit = (event) => {
    event.preventDefault();
    var data = {
        title : this.props.title,
        description : this.props.description,
        status: this.props.status
    }
    this.props.postFormdata(data);
    setTimeout(() => {console.log(this.props.receiveData)}, 3000);
    
    // alert('Submitted data ' + this.props.receiveData["title"] + ' ' + this.props.receiveData["description"] + ' ' + this.props.receiveData["status"]);
    
} 

  render() {


    return (
      
      <form style={container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      
      <div>
        <TextField
          id="standard-name"
          label="Title"
          style={textField}
        //   value={this.props.title}
          onChange={(event) => this.props.handleChangeTitle(event.target.value)}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="standard-uncontrolled"
          label="Description"
          name="description"
          multiline = {true}
          style={textField}
        //   value={this.props.description}
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
          value={this.props.status}
          onChange={(event) => this.props.handleChangeStatus(this.props.status)}
          margin="normal"
        />
      </div>
      <div>
        <Button variant= "contained" color="primary" style={button} type="submit">Save</Button>
        <Button variant= "contained" color="default" style={button_clear} >Clear All</Button>
        </div>
      </form>
    );
  }
}


const mapStateToProps = state => ({
  title: state.postReducer.title,
  description: state.postReducer.description,
  stat: state.postReducer.stat,
  toggle :  state.postReducer.toggle,
  receiveData : state.postReducer.receiveData
})

export default connect(mapStateToProps, { handleChangeTitle, handleChangeDesc, handleChangeStatus, handleOnClose, postFormdata })(AddTaskForm);

// export default (AddTaskForm);

