import "./user-info.css";
import { useSelector } from "react-redux";
import { findAge } from "../../utils/functions";
import React from "react";

const UserInfo = () => {
  const { user } = useSelector((store) => store.user);
  const userAge = findAge(user?.birthdate);
  return (
    <div className='userContainer'>
      <div className='container-center'>
        <div className='userInfo'>
          <div className='avatar'>
            {user && (
              <img src={`${user.avatar}`} alt='' className='avatar-image' />
            )}
          </div>
          <div className='userName'>
            <h2>{user.username}</h2>
          </div>
          <div className='email-birthday-container'>
            <div className='email'>
              <span className='email-span'>Email</span>
              <br />
              <span>{user.email}</span>
            </div>
            <div className='birthday'>
              <span className='birtday-span'>Age</span>
              <br />
              <span>{userAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
