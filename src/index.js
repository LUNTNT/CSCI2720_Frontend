import ReactDOM from "react-dom/client";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
  Navigate
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login/login'
import Dashboard from "./screens/Home/normal/dashboard";
import EventMap from "./screens/Home/normal/eventMap";
import Location from "./screens/Home/normal/location";
import Admin from "./screens/Home/admin/admin"

export default function App() {
  return (

    <BrowserRouter>

      <Routes>
        {/* add path here */}
        {/* first page is login, so add "index" */}
        <Route path="/" index element={<Navigate to="login" />} />
        <Route path="/login" index element={<Login/>} />
        
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/event" element={<Admin/>}/>
        <Route path="/admin/user" element={<Admin/>}/>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/location/:id" element={<Location />} />
        <Route path="/allevent" element={<EventMap />} />

      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);
