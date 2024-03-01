import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ClubRule from './components/DropDown/ClubRule.jsx';
import ArtClub from './components/DropDown/ArtClub.jsx';
import LiteraryClub from './components/DropDown/LiteraryClub.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "clubRule",
    element: <ClubRule/>,
  },
  {
    path: "BackHome",
    element: <App/>,
  },
  {
    path: "ArtClub",
    element: <ArtClub/>,
  },
  {
    path: "LiteraryClub",
    element: <LiteraryClub/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
