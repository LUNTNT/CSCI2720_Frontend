import ReactDOM from "react-dom/client";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Login from './screens/Login/login'

export default function App () {
  return (
    <BrowserRouter>

      <Routes>
        {/* add path here */}
        {/* first page is login, so add "index" */}
        <Route index element={<Login/>}/> 
        
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);
