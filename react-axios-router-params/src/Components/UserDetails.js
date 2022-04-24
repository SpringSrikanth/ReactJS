import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../Axios/Api";

const UserDetails = () => {
    const { userId }=useParams();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        Api.get(`users/${userId}`).then(res=> res.data).then(res=>{
            setUser(res.user)
        }).catch(err=> console.log(err.message))
    })
    return ( 
        <>
            {
                user ? 
                    <div className="container">
                        <h1>User Details of {user.firstName}</h1>
                        <div className="row mt-3">
                            <span className="col-md-3">FirstName </span>
                            <span className="col-md-6">{user.firstName}</span>
                        </div>
                        <div className="row  mt-3">
                            <span className="col-md-3">SecondName </span>
                            <span className="col-md-6">{user.secondName}</span>
                        </div>
                        <div className="row  mt-3">
                            <span className="col-md-3">UserName </span>
                            <span className="col-md-6">{user.userName}</span>
                        </div>
                        <div className="row  mt-3">
                            <span className="col-md-3">Email </span>
                            <span className="col-md-6">{user.email}</span>
                        </div>
                        <div className="row  mt-3">
                            <span className="col-md-3">DOB </span>
                            <span className="col-md-6">{user.dob}</span>
                        </div>
                        <div className="row  mt-3">
                            <span className="col-md-3">Gender </span>
                            <span className="col-md-6">{user.gender}</span>
                        </div>
                    </div>
                : null
            }

        </>
    );
}
 
export default UserDetails;