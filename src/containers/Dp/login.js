import React, { Component } from 'react';
import './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {handleLoginClick, showLogin} from './actions';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dp from './index';
import ls from 'local-storage';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  open : true
  }
 }

 handleClose = (event, reason) =>  {
      if (reason === 'clickaway') {
        return;
      }
  
      this.setState({open:false});
    }
render() {
   console.log("Iserror: " + this.props.isError)
    return (
      (ls.get('token'))? <Dp /> : 
        
      <div>
      {this.props.isError && <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={this.state.open}
      autoHideDuration={6000}
      onClose={this.handleClose}
      ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Invalid Login Credentials</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
      
    >
      {/* <SnackbarContent
        onClose={this.handleClose}
        variant="error"
        message="Login Credentials invalid!!"
        
      /> */}
    </Snackbar>
      }
      <div style={{textAlign:"center", margin:"0 auto"}}>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
             style={{ background: '#292C2D' }}
           />
           <div class="border">
            <TextField
                  hintText="Enter your Username"
                  floatingLabelText="Username"
                  onChange = {(event,newValue) => this.setState({username:newValue})}
                  />
                  <br/>
                  <TextField
                  type="password"
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  onChange = {(event,newValue) => this.setState({password:newValue})}
                  />
                  <br/> 
                  <RaisedButton label="Submit" style={style} onClick={() => {
                        this.props.handleLoginClick(this.state.username, this.state.password)}
                  }
                  />
            </div>
         </div>
         </MuiThemeProvider>
      </div>
      </div>
    ); 
  }
}
const style = {
 margin: 15,
};

const mapStateToProps = state => ({
      loginData: state.postReducer.loginData ,
      isLogin : state.postReducer.isLogin,
      isError: state.postReducer.isError
})
export default connect(mapStateToProps, { handleLoginClick, showLogin })(Login);
