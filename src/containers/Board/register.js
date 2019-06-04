import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {handleRegisterClick, handleLoginClick, showRegister} from './actions';
import { connect } from 'react-redux';
import Login from './login';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ls from 'local-storage';

const muiTheme = getMuiTheme({
    palette: {
         primary: '#00bcd4',
         secondary: '#ff4081'
       }
     });

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  render() {
    return (
     (ls.get('token')|| this.props.isRegister)?<Login /> :
      <div style={{margin:"0 auto"}}>
        <div style={{textAlign:"center", margin:"0 auto"}}> 
                <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                        title="Register"
                        style={{ background: '#292C2D' }}
                    />
                    <div class="border" >
                        <TextField
                            hintText="Enter your Username"
                            type="email"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({email:newValue})}
                            style = {{textEmphasisColor:"black"}}
                            />
                        <br/>
                        <TextField
                            type = "password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                        <br/>
                        <RaisedButton label="Submit" variant="extended" style={style} onClick={() => {this.props.handleRegisterClick(this.state.email, this.state.password); this.props.showRegister(this.props.isRegister)}}/>
                    </div>

                </div>
                <div  style={{ width: 300, paddingTop:50,   margin:"0 auto"}}>
                Already Signed up. 
                Go to Login
                <MuiThemeProvider>
                <div>
                    <RaisedButton label="Login" style={style} onClick = {()=> this.props.showRegister(this.props.isRegister)}/>
                </div>
                </MuiThemeProvider>
                </div>
                </MuiThemeProvider>
         </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
  backgroundColor: '#292C2D'
};
const mapStateToProps = state => ({
    registerData: state.postReducer.registerData  ,
    isRegister : state.postReducer.isRegister,
    
})
export default connect(mapStateToProps, { handleRegisterClick , handleLoginClick, showRegister})(Register);