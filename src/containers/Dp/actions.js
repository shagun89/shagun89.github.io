import { Constants } from './constants';
import axios from 'axios';
import {doHttpPost, doHttpGet, doHttpPut, doHttpDelete} from '../../components/utilities.js';

export function handleMenuClose(value){
  return (dispatch) => {
    dispatch({
        type : Constants.MENU_STATE_TOGGLE,
        anchorEl: value
    });
}
}

export function handleAddMenuClose(value){
  return (dispatch) => {
    dispatch({
        type : Constants.ADDMENU_STATE_TOGGLE,
        addanchorEl: value
    });
}
}



export function handleAddMenuOpen(value){
  console.log("Value in action", value)
  return (dispatch) => {
    dispatch({
        type : Constants.ADDMENU_STATE_OPEN,
        addanchorEl: value
    });
}
}

export function handleProfileMenuOpen(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.MENU_STATE_OPEN,
        anchorEl: value
    });
}
}

export function handleOpen(value, stat){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.FORM_TOGGLE,
        openForm: value,
        taskStatus: stat
    });
}
}

export function handleClose(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.FORM_TOGGLE,
        openForm: value
    });
}
}

export function handleChangeTitle(value){
  console.log("value in changeTitle: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.TITLE_CHANGE,
        title: value
    });
}
}

export function handleChangeDesc(value){
  console.log("value in changeDesc: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.DESC_CHANGE,
        description: value
    });
}
}

export function handleChangeStatus(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.STATUS_CHANGE,
        stat: value
    });
}
}

export function handleOnClose(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.TOGGLE_CLOSE,
        toggle: value
    });
}
}

export function handleExpandClick(value, selectedElement, allElements){
  console.log("specific id in actions : ", selectedElement);
  var rej = [], pend = [], dev = [], test = [], prod = [];
    allElements.PENDING.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.expandStatus=value; 
        pend.push(element) ;
      }
      else
      {
        pend.push(element);
      }
    });
    allElements.REJECTED.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.expandStatus=value; 
        rej.push(element) ;
      }
      else
      {
        rej.push(element);
      }
    });
    allElements.DEVELOPMENT.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.expandStatus=value; 
        dev.push(element) ;
      }
      else
      {
        dev.push(element);
      }
    });
    allElements.TESTING.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.expandStatus=value; 
        test.push(element) ;
      }
      else
      {
        test.push(element);
      }
    });
    allElements.PRODUCTION.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.expandStatus=value; 
        prod.push(element) ;
      }
      else
      {
        prod.push(element);
      }
    });
  return (dispatch) => {
    dispatch({
        type : Constants.EXPAND_TOGGLE,
        expanded: value,
        selectedElement,
        rejected: rej,
        pending: pend,
        development: dev,
        testing: test,
        production: prod
    });
}
}

export function handleEditClick(value, selectedElement, allElements){
  console.log("specific id in actions : ", selectedElement);
  var rej = [], pend = [], dev = [], test = [], prod = [];
    allElements.PENDING.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.editStatus=value; 
        pend.push(element) ;
      }
      else
      {
        pend.push(element);
      }
    });
    allElements.REJECTED.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.editStatus=value; 
        rej.push(element) ;
      }
      else
      {
        rej.push(element);
      }
    });
    allElements.DEVELOPMENT.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.editStatus=value; 
        dev.push(element) ;
      }
      else
      {
        dev.push(element);
      }
    });
    allElements.TESTING.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.editStatus=value; 
        test.push(element) ;
      }
      else
      {
        test.push(element);
      }
    });
    allElements.PRODUCTION.forEach(element => {
      if(element.id == selectedElement.id)
      {
        element.editStatus=value; 
        prod.push(element) ;
      }
      else
      {
        prod.push(element);
      }
    });
  return (dispatch) => {
    dispatch({
      type : Constants.EDIT_TASK,
      edit: value,
      selectedElement,
      rejected: rej,
      pending: pend,
      development: dev,
      testing: test,
      production: prod
  });
}
    
}

export function postFormdata (submitData, token) {
  console.log("value in action: ",submitData);
  return (dispatch) => {
    var url = 'http://192.168.36.64:8080/user/tasks';
    let options = {
      'access_token': ""+token,
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
  }
    var promise = doHttpPost(url, submitData, options);
  
    promise.then((response) => {
      
      console.log(response.data);
      this.getData(token);
      dispatch({
        type : Constants.RECEIVED_DATA,
        receiveData: response.data
    });
    }, (error) => {
      console.log('Some error occured: ' + error);
    })
    
}




// const headers = {
//   'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmFrcml0aSIsImV4cCI6MTU1OTc5ODA4MH0.MUtLs3q6hgO56Nnlj9CYmDyt0yMj6XtvNvy1hUoBKCDKK6Fa23CGRAUk5xAytCAFTctW7Rmhi4itnPdGCNqCVg',
//   'Access-Control-Allow-Origin': '*',
//   "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
// };
// return (dispatch) => {
//   axios.get('http://192.168.36.64:8080/user/tasks',{headers})
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });
// }
}

export function getData(token){

  return (dispatch) => {
     var url = 'http://192.168.36.64:8080/user/tasks';
    //var url = 'https://api.jsonbin.io/b/5cef5fb1b12ce73bdabf323c';
    let options = {
      'access_token': ""+token,
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
    }
    console.log("Inside get call token is: " + token)
  var promise = doHttpGet(url, options);
   promise.then((response) => {
   
    var rej = [], pend = [], dev = [], test = [], prod = [];
    response.data.PENDING.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      pend.push(element);
    });
    response.data.REJECTED.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      rej.push(element);
    });
    response.data.DEVELOPMENT.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      dev.push(element);
    });
    response.data.TESTING.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      test.push(element);
    });
    response.data.PRODUCTION.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      console.log("inside for for production: " + element)
      prod.push(element);
    });
    dispatch({
      type : Constants.FORM_DATA,
      formData: response.data,
      rejected: rej,
      pending: pend,
      development: dev,
      testing: test,
      production: prod
  });
   })
}
}

export function updateFormdata (submitData, id, token) {
  console.log("value in action of update task api: ",submitData);
  return (dispatch) => {
    var url = 'http://192.168.36.64:8080/user/tasks/' + id;
    let options = {
      'access_token': ""+token,
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods" : "GET,HEAD,POST,PUT,DELETE"
  }
    var promise = doHttpPut(url, submitData, options);
  
    promise.then((response) => {
      
      console.log("UPDATE SUCCESSFUL: "+response.data);
      this.getData(token);
      dispatch({
        type : Constants.UPDATED_DATA,
        updateData: response.data
    });
    }, (error) => {
      console.log('Some error occured: ' + error);
    })
    
  }
}

export function deleteFormdata (id, token) {
  // console.log("value in action of update task api: ",submitData);
  return (dispatch) => {
    var url = 'http://192.168.36.64:8080/user/tasks/' + id;
    let options = {
      'access_token': ""+token,
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
  }
    var promise = doHttpDelete(url, options);
    
    promise.then((response) => {
      this.getData(token);
      dispatch({
        type : Constants.DELETED_DATA,
        deleteData: response.data
    });
          
   
    }, (error) => {
      console.log('Some error occured: ' + error);
    })
    
  }
}

export function handleLoginClick(user, pass) {
  
  return (dispatch) => {
    var data = {
      "credentials":Buffer.from(user + ":" + pass).toString('base64')
    }
    var url = 'http://192.168.36.64:8080/login';
    let options = {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
   }
    var promise = doHttpPost(url, data , options);
    
    promise.then((response) => {
      console.log("Response from login: " + response.headers.authorization);
      dispatch({
        type : Constants.LOGIN,
        loginData: response,
        token : response.headers.authorization
    });
    }, (error) => {
      console.log('Some error occured: ' + error);

    })
    
  }
}

export function handleRegisterClick(user, pass) {
  var data = {
    "credentials":Buffer.from(user + ":" + pass).toString('base64')
  }
  
  return (dispatch) => {
    var url = 'http://192.168.36.64:8080/user/sign-up';
    let options = {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
   }
    var promise = doHttpPost(url, data , options);
  
    promise.then((response) => {
      dispatch({
        type : Constants.REGISTER,
        registerData: response,
        
    });
    }, (error) => {
      console.log('Some error occured: ' + error);
    })
    
  }
}

export function showRegister(value){
  
  return (dispatch) => {
    dispatch({
        type : Constants.SHOW_REGISTER,
        isRegister: !value
    });
}
}
export function showLogin(value){
  
  return (dispatch) => {
    dispatch({
        type : Constants.SHOW_LOGIN,
        isLogin: !value
    });
}
}

// export function showRegister(value){
  
//   return (dispatch) => {
//     dispatch({
//         type : Constants.SHOW_REGISTER,
//         isRegister: !value
//     });
// }
// }