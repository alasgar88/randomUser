import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newUser } from "./feautures/users/userSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./containers/UserInfo/UserInfo";
const socket = new WebSocket("ws://simple-realtime-server.herokuapp.com/");

function App() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const assingData = (data) => {
    dispatch(newUser(JSON.parse(data)));
  };

  useEffect(() => {
    socket.addEventListener("message", (event) => {
      assingData(event.data);
    });
    socket.onclose = () => {
      socket.close();
    };

    return () => {
      socket.removeEventListener("message", assingData);
    };
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
