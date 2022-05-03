const Users = ({ data, selected }) => {
    return (
      <ul className="list-group">
        {data?.users
          ? data?.users.map((user) => (
              <li
                className={
                  user.id === data.selectedUser.id
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={user.id}
                onClick={() => selected(user.id)}
              >
                {user?.name}
              </li>
            ))
          : null}
      </ul>
    );
  };
  
  export default Users;
  