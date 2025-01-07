import React from 'react';
import './App.css';
import PagesRoutes from "./routes/PagesRoutes";
import { useSelector } from 'react-redux';
import { RootState } from './store/Store';
import Loader from './common/loader';


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