//export const FETCH_POSTS= 'FETCH_POSTS';

import keyMirror from 'keymirror';

export const Constants = keyMirror({
    // TEST_VALUE: null,
    // API_CALL_TEST:{},
    // POST_API_RESPONSE:{},
    // SHOW_LOADER: null,
    // HIDE_LOADER:null,
    // DIV_STATE_TOGGLE: null,
    MENU_STATE_TOGGLE: null,
    ADDMENU_STATE_TOGGLE: null,
    ADDMENU_STATE_OPEN: null,
    MENU_STATE_OPEN: null,
    FORM_TOGGLE : null,
    TITLE_CHANGE: null,
    DESC_CHANGE : null,
    STATUS_CHANGE : null,
    TOGGLE_CLOSE: null,
    FORM_DATA : [],
    EXPAND_TOGGLE : null,
    RECEIVED_DATA : null,
    EDIT_TASK : null,
    UPDATED_DATA: null,
    DELETED_DATA: null,
    LOGIN: null,
    REGISTER : null,
    SHOW_REGISTER : null,
    SHOW_LOGIN : null,
    AUTH_TOKEN : null
});

// const headers = {
//   'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmFrcml0aSIsImV4cCI6MTU1OTc5ODA4MH0.MUtLs3q6hgO56Nnlj9CYmDyt0yMj6XtvNvy1hUoBKCDKK6Fa23CGRAUk5xAytCAFTctW7Rmhi4itnPdGCNqCVg',
//   'Access-Control-Allow-Origin': '*',
//   "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
// };
// return (dispatch) => {
//   axios.get('http://192.168.36.64:8080/user/tasks1',{headers})
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });
// }