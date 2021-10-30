import { SET_USER_EMAIL , SET_USER_PASS } from "./action";

const initialState = {
    email: '',
    pass: '',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_EMAIL :
            return {...state, email: action.payload};
        case SET_USER_PASS :
            return {...state, pass: action.payload};
        default:
            return state;
    }
}

export default userReducer;