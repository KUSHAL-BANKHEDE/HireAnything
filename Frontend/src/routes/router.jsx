// src/routes/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import MyService from '../pages/Service';
import Partner from '../pages/Partnerbook';
import Layout from '../components/Layout'; // Import the layout

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Wrap with Layout
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
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
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'Offerings',
        element: <Cart />,
      },
    ],
  },
]);
