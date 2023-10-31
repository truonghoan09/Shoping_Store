import { useNavigate, useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from '@/pages/Home';
import PATH from '@/config/routeConfig';
import Layout1 from '@/components/Layout/Layout1';
import Product from '@/pages/Product';
import SignIn from '@/module/signIn/signIn';
import Layout2 from '@/components/Layout/Layout2';
import SignUp from '@/module/signUp/signUp';
import { checkIsSignIn } from '@/redux/actions';

export default function AppRoutes() {
  const element = useRoutes([
    {
      path: PATH.HOME,
      element: <Layout1 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: PATH.PRODUCT,
      element:<Layout1 />,
      children: [
        {
          index: true,
          element: <Product />
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
