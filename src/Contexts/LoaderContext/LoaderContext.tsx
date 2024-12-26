import React, { createContext,useState,useCallback  } from 'react';
import {useContext} from "react";


const LoaderContext = createContext({
    loader:false,
    showLoader:()=>{},
    hideLoader:()=>{}
});

export const LoaderContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [loader,setLoader] = useState(false);

    const showLoader = useCallback(() => setLoader(true), []);
    const hideLoader = useCallback(() => setLoader(false), []);

    return (
        <LoaderContext.Provider value={{loader,showLoader,hideLoader}}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader=()=>useContext(LoaderContext);

