import { Outlet } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import styles from '../outlet.module.scss';

function Layout1() {

  return (
    <>
      <Header />
      <Outlet className={styles.outletContainer}/>
      <Footer />
    </>
  );
}

export default Layout1;
