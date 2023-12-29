import { Outlet } from 'react-router-dom';
import Header from '../../Header/HeaderIndex';
import styles from '../outlet.module.scss';
import React from 'react';

const Layout2 : React.FC = () => {

  return (
    <>
      <Header />
      <Outlet className={styles.outletContainer}/>
    </>
  );
}

export default Layout2;
