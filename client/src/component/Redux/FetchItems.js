
import utils from '../service/utils';


export const FetchItems = () => async (dispatch) => {

    try {
            const res = await utils.getAllItems("http://localhost:8000/api/items");
            console.log("res_items:")
            console.log(res)
            dispatch({ type: 'FETCH_ITEMS', payload: res});
        } catch (err) {
            dispatch({ type: 'FETCH_ITEMS_ERROR', payload: err });
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
