const initialState = {
    users: [],
    loading: true,
    error: null
};
export default function appReducer(state = initialState, action)
{
        switch (action.type) {
            case 'FETCH_USERS':
                return {
                    ...state,
                    users: action.payload,
                    loading: false
                };
            case 'FETCH_USERS_ERROR':
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                };
            default:
                return state;
        }
 
}