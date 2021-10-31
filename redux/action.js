export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASS = 'SET_USER_PASS';
export const GET_DATAS_API = 'GET_DATAS_API';


export const getApiData = () => {
    try{
        return async dispatch => {
            const result = await fetch("https://mocki.io/v1/cd3ce181-0d2e-43a0-aac1-fe74cf095af8",{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_DATAS_API,
                    payload: json
                })
            } else {
                console.log("unable to fetch")
            }
        }
    } catch (err) {
        console.log(err);
    }
}

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