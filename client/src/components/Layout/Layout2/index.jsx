import { Outlet } from 'react-router-dom';
import Header from '../../Header';

function Layout2() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout2;
