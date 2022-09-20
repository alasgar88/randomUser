import "./user-list.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAge } from "../../utils/functions";
import { addUser } from "../../feautures/users/userSlice";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((store) => store.user);
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  const assingData = ({ data }) => {
    dispatch(addUser(JSON.parse(data)));
  };

  useEffect(() => {
    const socket = new WebSocket("wss://simple-realtime-server.herokuapp.com/");
    if (checked) {
      socket.addEventListener("message", assingData);
      return () => {
        socket.removeEventListener("message", assingData);
      };
    } else {
      socket.close();
    }
  }, [checked]);

  return (
    <div>
      <div className='checkbox-container'>
        <label htmlFor='loadData'></label>
        Load Data
        <input
          type='checkbox'
          id='loadData'
          className='dataChecbox'
          checked={checked}
          onChange={handleChange}
        />
      </div>
      <table id='users'>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            const userAge = findAge(user?.birthdate);
            return (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{userAge}</td>
                <td>
                  <Link to={`/detail/${user.id}`}>info</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
