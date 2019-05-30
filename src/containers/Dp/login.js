import React, { Component } from 'react';
import './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {handleLoginClick, showLogin} from './actions';

import { connect } from 'react-redux';
import Dp from './index';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      (this.props.loginData)? <Dp /> :
      <div>
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
      isLogin : state.postReducer.isLogin
})
export default connect(mapStateToProps, { handleLoginClick, showLogin })(Login);
