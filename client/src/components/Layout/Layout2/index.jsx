import { Outlet } from 'react-router-dom';
import Header from '../../Header';
import styles from '../outlet.module.scss';

function Layout2() {

  return (
    <>
      <Header />
      <Outlet className={styles.outletContainer}/>
    </>
  );
}

export default Layout2;
