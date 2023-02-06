

export const FetchUser = () => async (dispatch) => {

    try {
            
            
            dispatch({ type: 'FETCH_LOGIN', payload: "try"});
        } catch (err) {
            dispatch({ type: 'FETCH_USER_ERROR', payload: err });
        }
    };