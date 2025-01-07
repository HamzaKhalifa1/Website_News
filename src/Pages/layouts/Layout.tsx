import React from 'react';
import Header from '../../Component/layout/header'
import Footer from '../../Component/layout/footer'
import {Outlet}  from 'react-router-dom';
import styles from './Layout.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../store/Store";
import Loader from "../../common/loader";


const Layout     = () => {
    const isLoading=useSelector((state: RootState) => state.loader.isLoading);
console.log(isLoading);

    return (
        <div className={styles.relative}>
            {isLoading && <Loader />}
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
