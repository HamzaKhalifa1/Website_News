import React from "react";
import styles from './CreateNewBlog.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useLoader} from "../../Contexts/LoaderContext/LoaderContext";

const CreateNewBlog = () => {
    const { showLoader, hideLoader } = useLoader();
    const { register, handleSubmit, formState: { errors },trigger } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        const formattedData = {
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
        };
        showLoader();
        axios.post(`http://localhost:8000/blogs`, formattedData)
            .then(() => {
                setTimeout(() => hideLoader(), 1000);
            })
        setTimeout(() => navigate('/'), 1000);

    };

    return (
        <form id={styles['new-blog-form']} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                className={styles[`title-input ${errors.title ? "error" : ""}`]}
                placeholder="Enter title"
                {...register("title", { required: true, pattern: /^[A-Z]/, maxLength: 50 })}
                onKeyUp={() => trigger("title")}
            />
            <div id={styles['title-error']} className={styles['error-message']}>
                {errors.title?.type === "required" && "Title is required."}
                {errors.title?.type === "pattern" && "Title must start with a capital letter."}
                {errors.title?.type === "maxLength" && "Title cannot exceed 50 characters."}
            </div>

            <label htmlFor="description">Description:</label>
            <textarea
                id={styles['description']}
                className={styles[`textarea-input ${errors.description ? "error" : ""}`]}
                placeholder="Enter description"
                {...register("description", { required: true, pattern: /^[a-zA-Z ]*$/, maxLength: 1000 })}
                onKeyUp={() => trigger("description")}
            ></textarea>
            <div id={styles["description-error"]} className={styles['error-message']}>
                {errors.description?.type === "required" && "Description is required."}
                {errors.description?.type === "pattern" && "Description can only contain letters and spaces."}
                {errors.description?.type === "maxLength" && "Description cannot exceed 1000 characters."}
            </div>

            <label htmlFor="image-url">Image URL:</label>
            <input
                type="text"
                id={styles["image-url"]}
                className={styles[`image-input ${errors.imageUrl ? "error" : ""}`]}
                placeholder="Enter image URL"
                {...register("imageUrl", { pattern: /^(https?:\/\/[^\s]+)$/ })}
                onKeyUp={() => trigger("imageUrl")}
            />
            <div id={styles["image-url-error"]} className={styles['error-message']}>
                {errors.imageUrl?.type === "pattern" && "Please enter a valid URL."}
            </div>

            <input type="submit" />
        </form>
    );
};

export default CreateNewBlog;
