// Users.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchUsers } from '../Redux/FetchUsers';

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
        { loading ? <div>Loading...</div> : 
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.userPassword}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }
        </div>
    );
}

  export default Users;

  
