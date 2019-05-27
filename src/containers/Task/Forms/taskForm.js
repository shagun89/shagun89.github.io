
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    margin: '20px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  
  input: {
    display: 'none',
  },

  dense: {
    marginTop: 19,
  },
  button: {
     margin: '0px',
     padding: '0 10px',
     radius: '12px',
     fontSize: '20px',
     marginLeft: '10px',
     marginTop: '30px'
  },

  menu: {
    width: 200,
  },
});




class AddTaskForm extends React.Component {

  state = {
    
    title: '',
    description: '',
    stat: ''
  };

  handleChange = title => event => {
    this.setState({ [title]: event.target.value });
  };
  handleChange = description => event => {
    this.setState({ [description]: event.target.value });
  };
  handleChange = stat => event => {
    this.setState({ [stat]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted data ' + this.state.title + ' ' + this.state.description + ' ' + this.state.stat);
    
  }

  render() {
    const { classes } = this.props;

    return (
      
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      <h2>Create task</h2>
      <div>
        <TextField
          id="standard-name"
          label="Title"
          className={classes.textField}
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="standard-uncontrolled"
          label="Description"
          name="description"
          multiline = {true}
          className={classes.textField}
          value={this.state.description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="standard-name"
          label="Status"
          name="stat"
          className={classes.textField}
          value={this.state.stat}
          onChange={this.handleChange('stat')}
          margin="normal"
        />
      </div>
      <div>
        <Button variant= "contained" color="primary" className={classes.button} type="submit">Save</Button>
        <Button variant= "contained" color="secondary" className={classes.button}>Delete</Button>
        </div>
      </form>
    );
  }
}

AddTaskForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({
//   title: state.postReducer.title,
//   description: state.postReducer.description,
//   stat: state.postReducer.stat
// })

export default withStyles(styles)(AddTaskForm);

