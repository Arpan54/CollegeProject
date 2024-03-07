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
import PhotoClub from './components/DropDown/PhotoClub.jsx';
import Talkies from './components/DropDown/Talkies.jsx';
import Hridmajhare from './components/DropDown/Hridmajhare.jsx';
import StudentReg from './components/LogReg/StudentReg.jsx';
import StudentLogin from './components/LogReg/StudentLogin.jsx';

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
  {
    path: "PhotoClub",
    element: <PhotoClub/>,
  },
  {
    path: "Talkies",
    element: <Talkies/>,
  },
  {
    path: "Hridmajhare",
    element: <Hridmajhare/>,
  },
  {
    path: "studentReg",
    element: <StudentReg/>
  },
  {
    path:"studentLogin",
    element: <StudentLogin/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
