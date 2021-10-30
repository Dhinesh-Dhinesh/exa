export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASS = 'SET_USER_PASS';

export const setEmail = email => dispatch => {
    dispatch({
        type: "SET_USER_EMAIL",
        payload: email,
    })
}

export const setPass = pass => dispatch => {
    dispatch({
        type: "SET_USER_PASS",
        payload: pass,
    })
}