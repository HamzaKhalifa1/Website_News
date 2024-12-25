import axios from 'axios';
import styles from './DeleteButton.module.css';
import React from 'react';
// @ts-ignore
const DeleteButton = ({ id ,onDelete} ) => {

    const deleteBlog = async () => {
        await axios.delete(`http://localhost:8000/blogs/${id}`);
        onDelete(id);
    };
    return (
        <i onClick={deleteBlog} className={styles.icon + " fa fa-trash icon"}></i>
    );
}


export default DeleteButton;