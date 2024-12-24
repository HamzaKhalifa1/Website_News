import axios from 'axios';
import styles from './DeleteButton.module.css';
import React from 'react';
// @ts-ignore
const DeleteButton = ({ id } ) => {

    const deleteBlog = async () => {
        await axios.delete(`http://localhost:8000/blogs/${id}`);
    };
    return (
        <button onClick={deleteBlog}><i className={styles["fa fa-trash icon"]}></i></button>
    );
}


export default DeleteButton;