import styles from './DeleteButton.module.css';
import React from 'react';
import cookies from "js-cookie";
import {hideLoader, showLoader} from "../../../store/LoaderSlice";
import {useDispatch} from "react-redux";
import BlogService from "../../../services/BlogService";

// @ts-ignore
const DeleteButton = ({ id ,onDelete} ) => {
    const dispatch=useDispatch();
    const lng = cookies.get('i18next') || 'en';
    const deleteBlog = async () => {
        dispatch(showLoader());
        setTimeout(()=>{
            dispatch(hideLoader());
            onDelete(id);
        },1000)
        BlogService.deleteBlogs(id,lng)

    };
    return (
        <i onClick={deleteBlog} className={styles.icon + " fa fa-trash icon"}></i>
    );
}


export default DeleteButton;