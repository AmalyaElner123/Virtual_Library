
import utils from '../service/utils';


export const FetchUsers = () => async (dispatch) => {

    try {
            const res = await utils.getAllUsers("http://localhost:8000/api/users");
            console.log("res_users:")
            console.log(res)
            dispatch({ type: 'FETCH_USERS', payload: res});
        } catch (err) {
            dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
        }
    };

    // export const FetchUsers = () => async (dispatch) => {
    //     dispatch({ type: 'FETCH_USERS_REQUEST' });
    //     try {
    //         const response = await fetch("your_api_endpoint");
    //         const data = await response.json();
    //         dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    //     } catch (error) {
    //         dispatch({ type: 'FETCH_USERS_FAILURE', payload: error });
    //     }
    // }
