import { Constants } from '../constants';

const initialState = {
    visibility: false,
    open: false,
    title: '',
    description: '',
    stat: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Constants.POPUP_CLOSE:
                return{
                    visibility: action.flag
                }
        case Constants.FORM_SHOW:
                return{
                    open: action.flag,
                }
        case Constants.SHOW_TITLE:
                return{
                    title: action.title
                }
        case Constants.SHOW_DESCRIPTION:
                return{
                    description: action.description
                }
        case Constants.SHOW_STATUS:
                return{
                    stat: action.stat
                }
        default:
            return state;
    }
}