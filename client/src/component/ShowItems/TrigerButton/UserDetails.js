export const UserDetails = (user) =>
{

    return(
        <div>
        <div>{user.user.userName + " "+ user.user.email+ " "+ user.user.phone}</div>
        
        </div>
    )
}; export default UserDetails