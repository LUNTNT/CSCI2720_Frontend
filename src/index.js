import ReactDOM from "react-dom/client";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Navigate,
  Outlet 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './screens/Login/userlogin'
import Dashboard from "./screens/Home/normal/dashboard";
import EventMap from "./screens/Home/normal/eventMap";
import Location from "./screens/Home/normal/location";
import Admin from "./screens/Home/admin/admin"
import AdminLogin from './screens/Login/adminlogin'
import NewUser from "./screens/Home/admin/newUser"
import NewEvent from "./screens/Home/admin/newEvent"
import UpdateUser from "./screens/Home/admin/updateUser"
import UpdateEvent from "./screens/Home/admin/updateEvent"
import FavLocList from "./screens/Home/normal/favLocList";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


const App = () => {

  const PrivateRoute = () => {
    const token = localStorage.getItem("myToken");
    return token ? (
      <Outlet />
    ) : (
      <Navigate
        to={{
          pathname: "/login/user"
        }}
      />
    );
  };

  // const PublicRoute = (props) => {
  //   const token = localStorage.getItem("myToken");

  //   return token ? (
  //     <Navigate to={{ pathname: "/main" }} />
  //   ) : (
  //     <Route {...props} />
  //   );
  // };
  return (

    <Router>

      <Routes>
        {/* add path here */}
        {/* first page is login, so add "index" */}

          <Route path="/" index element={<Navigate to="/login/user" />} />
          <Route path="/login/user" index element={<UserLogin />} />
          <Route path="/login/admin" index element={<AdminLogin />} />

          <Route exact path='/' element={<PrivateRoute/>}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/event" element={<Admin />} />
            <Route path="/admin/user" element={<Admin />} />
            <Route path="/admin/newUser" element={<NewUser />} />
            <Route path="/admin/newEvent" element={<NewEvent />} />
            <Route path="/admin/updateUser/:id" element={<UpdateUser />} />
            <Route path="/admin/updateEvent/:id" element={<UpdateEvent />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/location/:id" element={<Location />} />
            <Route path="/allevent" element={<EventMap />} />
            <Route path="/dashboard/favloc" element={<FavLocList />} />
          </Route>

      </Routes>
    </Router>
  );
}
export default App;

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);
