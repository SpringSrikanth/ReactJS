import { useEffect, useReducer } from "react";
import AxiosClient from "./axios/AxiosClient";
import Users from "./components/Users";
import User from "./components/User";

const LOAD_USERS = "LOAD_USERS";
const SELECTED_USER = "SELECTED_USER";

const initialState = {
  users: [],
  selectedUser: {}
};

const userReducer = (state, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.users };
    case SELECTED_USER:
      return { ...state, selectedUser: action.selectedUser };
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    AxiosClient.get("users")
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: LOAD_USERS, users: data });
        dispatch({ type: SELECTED_USER, selectedUser: { ...data[0] } });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const selectedUserDetails = (id) => {
    AxiosClient.get(`users/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        dispatch({ type: SELECTED_USER, selectedUser: { ...data } });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container row">
      <Users className="col-md-5" data={state} selected={selectedUserDetails} />
      <User className="col-md-3" data={state} />
    </div>
  );
}
