const UserList = ({users,selectedUser,selectUser}) => {
    return ( 
        <ul className="list-group m-3">
            {users.map((user)=>(
                <li className={"list-group-item " + (selectedUser?.id===user?.id ? "active":"")} 
                key={user.id}
                onClick={()=>selectUser(user.id)}
                >{user.name}</li>
            ))}
        </ul>
     );
}
 
export default UserList;