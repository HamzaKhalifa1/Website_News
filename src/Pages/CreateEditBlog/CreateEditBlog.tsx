import React from "react";
import FormBlogs from "../../Component/CreateEditBlogs/FormBlogs";
import {useLocation} from "react-router-dom";


const CreateEditBlog = () => {
    const location = useLocation();
    const { isVisited, id } = location.state || { isVisited: false, id: null };

    return (
        <>
            {isVisited && <FormBlogs isVisited={true} id={id}/> || <FormBlogs/>}
        </>
    );
};

export default CreateEditBlog;
