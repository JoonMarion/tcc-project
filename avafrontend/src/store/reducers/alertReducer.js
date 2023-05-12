import alertAction from '../actions/alertActions';

const initialState = {
    showAlertMessage: false,
    alertMessageContent: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case alertAction.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            };
        case alertAction.CLOSE_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null,
            };
        default:
            return state;
    }
};

export default reducer;
