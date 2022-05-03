const User = ({ data }) => {
    const { selectedUser: user } = data;
    return (
      <div className="container m-3">
        {user ? (
          <>
            <div className="row">User ID : {user.id}</div>
            <div className="row">Name : {user.name}</div>
            <div className="row">Email : {user.email}</div>
            <div className="row">Phone : {user.phone}</div>
            <div className="row">Website : {user.website}</div>
          </>
        ) : null}
      </div>
    );
  };
  
  export default User;
  