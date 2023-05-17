// Users.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchUsers } from '../Redux/FetchUsers';
import { FetchItems } from './FetchItems';

const Users = () => {
    // const users = useSelector(state => state.users.users);
    // const loading = useSelector(state => state.users.loading);
    const users= useSelector(state => state.users);
    const loading = useSelector(state => state.loading)
    // console.log("loading:")
    // console.log(loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchUsers());
    }, []);
    // useEffect(() => {
    //     if (users.length > 0) {
    //         console.log("users:")
    //         console.log(users)

    //     }
    // }, [users]);
    return (
        <div>
    
        </div>
    );
}

  export default Users;

  
