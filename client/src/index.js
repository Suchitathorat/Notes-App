import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import NewNote from './views/NewNote/NewNote';
import Home from './views/Home/Home';

//creating router
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>

  },

  {
    path:"/new",
    element:<NewNote/>

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//rendering router here
root.render(<RouterProvider router={router}/>);


