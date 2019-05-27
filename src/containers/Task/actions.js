import { Constants } from './constants';

export function handleOpen(flag){
    return (dispatch) => {
        dispatch({
            type: Constants.FORM_SHOW,
            flag
        });
      }
}

export function handleClose(flag){
    return (dispatch) => {
        dispatch({
            type: Constants.FORM_SHOW,
            flag
        });
      }
}

export function togglePopup(flag){
    return (dispatch) => {
        dispatch({
            type: Constants.POPUP_CLOSE,
            flag
        });
      }
}