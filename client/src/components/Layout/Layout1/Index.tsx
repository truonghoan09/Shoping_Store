import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../../Header/HeaderIndex';
import Footer from '../../Footer/FooterIndex';
import styles from '../outlet.module.scss';

const Layout1 : React.FC = () => {

  return (
    <>
      <Header />
      <Outlet className={styles.outletContainer}/>
      <Footer />
    </>
  );
}

export default Layout1;
