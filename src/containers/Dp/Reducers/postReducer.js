
import { Constants } from '../constants';

const initialState = {

    edit: null,
    formData : [],
    rejected : [],
    pending : [],
    development : [],
    testing : [],
    production : [],
    specificId: null,
    selectedElement: null,
    updateData: {},
    deleteData: null,
    loginData: null,
    registerData : null,
    isRegister :  null,
    isLogin : null,
    token : null,
    isError : null,
    searchData : null,
    logoutData : null
};

export default function (state = initialState, action) {
    switch (action.type) {
       
        case Constants.FORM_TOGGLE:
               return{...state,
                    openForm : action.openForm,
                    taskStatus : action.taskStatus
               }
        case Constants.TITLE_CHANGE:
                return{...state,
                    title: action.title
                }
        case Constants.DESC_CHANGE:
                return{...state,
                    description: action.description
                }
        case Constants.ASSIGN_CHANGE:
                return{...state,
                    assignTo: action.assignTo
                }
        case Constants.STATUS_CHANGE:
                return{...state,
                    stat: action.stat
                }
        
        case Constants.TOGGLE_CLOSE:
                return{...state,
                    toggle: action.toggle
                }
        case Constants.FORM_DATA:
                return{...state,
                    formData : action.formData,
                    rejected :  action.rejected,
                    pending :  action.pending,
                    development :  action.development,
                    testing :  action.testing,
                    production: action.production,
                    
                }
        case Constants.SEARCH_DATA:
                return{...state,
                    searchData : action.searchData,
                    rejected :  action.rejected,
                    pending :  action.pending,
                    development :  action.development,
                    testing :  action.testing,
                    production: action.production,
                    
                }
        case Constants.EXPAND_TOGGLE:
                return {...state,
                    expanded :  action.expanded,
                    selectedElement: action.selectedElement,
                    allElements: action.allElements,
                    rejected :  action.rejected,
                    pending :  action.pending,
                    development :  action.development,
                    testing :  action.testing,
                    production: action.production
                }
        case Constants.RECEIVED_DATA:
                return {...state,
                    receiveData :  action.receiveData,
                    
                }
        case Constants.EDIT_TASK:
                return {...state,
                    edit :  action.edit,
                    selectedElement: action.selectedElement,
                    rejected :  action.rejected,
                    pending :  action.pending,
                    development :  action.development,
                    testing :  action.testing,
                    production: action.production
                }
        case Constants.UPDATED_DATA:
                return {...state,
                    updateData :  action.updateData,
                    
                }
        case Constants.DELETED_DATA:
                return {...state,
                    deleteData :  action.deleteData,
                    
                }
        case Constants.LOGIN:
                return {...state,
                    loginData :  action.loginData,
                    token: action.token,
                    isError : action.isError
                }
        case Constants.LOGOUT:
                return {...state,
                    logoutData :  action.logoutData,
                }
        case Constants.REGISTER:
                return {...state,
                    registerData :  action.registerData,
                    
                }
        case Constants.SHOW_REGISTER:
                return {...state,
                    isRegister :  action.isRegister,
                    
                }
        case Constants.SHOW_LOGIN:
                return {...state,
                    isLogin :  action.isLogin,
                    
                }
        
        default:
            return state;
    }
}
