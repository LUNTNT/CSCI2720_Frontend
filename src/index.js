import ReactDOM from "react-dom/client";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login/login'
import NormalUser from "./screens/Home/normal/normalUser";
import Location from "./screens/Home/normal/location";


export default function App () {
  return (

    <BrowserRouter>

      <Routes>
        {/* add path here */}
        {/* first page is login, so add "index" */}

        <Route index element={<Login/>}/> 
        <Route path="/user" element={<NormalUser/>}/>
        <Route path="/location:id" element={<Location/>}/>

      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);
