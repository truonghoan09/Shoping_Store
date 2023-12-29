import { useRoutes } from 'react-router-dom';
import HomePage from '../../pages/Home/HomeIndex';
import PATH from '../../config/routeConfig'
import Layout1 from '../../components/Layout/Layout1/Index'
import Layout2 from '../../components/Layout/Layout2/Index';
import ProductPage from '../../pages/Product/Index'
import SignIn from '../../module/signIn/signIn';
import SignUp from '../../module/signUp/signUp';
import Contact from '../../pages/Contact/IndexContact';
import React from 'react';

export default function AppRoutes() {
  const element = useRoutes([
    {
      path: PATH.HOME,
      element: <Layout1 />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: PATH.PRODUCT,
      element:<Layout1 />,
      children: [
        {
          index: true,
          element: <ProductPage />
        }
      ]
    },
    {
      path: PATH.CONTACT,
      element:<Layout1 />,
      children: [
        {
          index: true,
          element: <Contact />
        }
      ]
    },
    {
      path: PATH.SIGNIN,
      element: <Layout2 />,
      children: [
        {
          index: true,
          element: <SignIn />
        }
      ],
    },
    {
      path: PATH.SIGNUP,
      element: <Layout2 />,
      children: [
        {
          index: true,
          element: <SignUp />,
        }
      ],
    }
  ]);
  return element;
}
