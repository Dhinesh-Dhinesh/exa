import { SET_USER_EMAIL, SET_USER_PASS, GET_DATAS_API} from "./action";

const initialState = {
    email: '',
    pass: '',
    getApi: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_EMAIL :
            return {...state, email: action.payload};
        case SET_USER_PASS :
            return {...state, pass: action.payload};
        case GET_DATAS_API :
            return {...state, getApi: action.payload};
        default:
            return state;
    }
}

export default userReducer;