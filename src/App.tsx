import React from 'react';
import './App.css';
import PagesRoutes from "./Routes/PagesRoutes";
import { useSelector } from 'react-redux';
import { RootState } from './Store/Store';
import Loader from './common/Loader';


function App() {
    const loader = useSelector((state: RootState) => state.loader.isLoading);

    return (
        <>
            {loader && <Loader />}
            <PagesRoutes/>
        </>

    );
}

export default App;