import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import Studentpanel from './components/Student/Studentpanel.jsx';
import Root from './Root.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/home/home';
import Teacher from './components/Teacher/Teacher.jsx';
import AddAssignment from './components/Teacher/AddAssignment';
import Logout from './components/Logout.jsx'
import SubAssignment from './components/Student/SubAssignment.jsx';
import AddStudent from './components/Teacher/AddStudent';
import ViewAssigmnet from './components/Student/ViewAssigmnet.jsx';
import Assignment1 from './components/Student/Assignment1.jsx';
import Assignment2 from './components/Student/Assignment2.jsx';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
  { 
        path: '',
        element: <Home />,
      },
      {
        path: 'Admin',
        element: <Admin />,
      },
      {
        path: 'Teacher',
        element: <Teacher />,
        children:[
          {
            path: 'add_assignment',
            element: <AddAssignment />,
          },
          {
            path: 'add_student',
            element: <AddStudent/>,
          },
        ],
      },
         
        ],
      },
      {
        path: 'Signup',
        element: <Signup />,

      },
      {
        path: 'Login',
        element: <Login />,

      },

      {    
        path: 'Logout',
        element: <Logout />,
      },
      {
        path: 'Student',
        element: <Studentpanel />,
        children: [ 
          {
          path: 'student_assignment',
          element: <SubAssignment />,
        },
        {
          path: 'view_assignment',
          element: <ViewAssigmnet />,
        },
        {
          path: 'Assignment1',
          element: <Assignment1 />,
        },
        {
          path: 'Assignment2',
          element: <Assignment2 />,
        },
        ],
      },
    ],
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
