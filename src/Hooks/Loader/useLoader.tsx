import {useLoader} from "../../Contexts/LoaderContext/LoaderContext";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const Loader = () => {
    const { loader } = useLoader();

    if (!loader) return null;

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "10vh"}}>
            <CircularProgress/>
        </div>
    );
};

export default Loader;