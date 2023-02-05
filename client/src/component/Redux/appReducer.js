const initialState = {
    users: [],
    items:[],
    userEmail:"",
    userPassword:"",
    loading: true,
    error: null,
    token:''
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
                case 'FETCH_ITEMS':
                return {
                    ...state,
                    items: action.payload,
                    loading: false
                };
            case 'FETCH_ITEMS_ERROR':
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                };
            case 'FETCH_LOGIN_USER' :
                return{
                    ...state, userEmail : action.payload

                    
                }
                
                case 'FETCH_LOGIN_PASSWORD' :
                return{
                    ...state, userPassword : action.payload

                }
                case 'FETCH_TOKEN':
                    return{
                        ...state,token:action.payload
                    }
            default:
                return state;
        }
 
}