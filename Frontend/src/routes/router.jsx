// src/routes/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import Signup from '../pages/Signup';

import Login from '../pages/Login';
import MyService from '../pages/Service';

import Partner from '../pages/Partnerbook';
// import Field from '../pages/Testcontact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
   
  },
  {
    path: 'about',
    element: <About />,
  },
  // {
  //   path: 'testcontact',
  //   element: <Field />,
  // },
  {
    path: 'category',
    element: <Categories />,
  },
  {
    path: 'contact',
    element: <Contact />,
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
    path: 'Service',
    element: <MyService />,
  },

  {
    path: 'Partner',
    element: <Partner />,
  },
]);
