import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./containers/UserInfo/UserInfo";
import UserList from "./containers/UserList/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/detail/:id' element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
