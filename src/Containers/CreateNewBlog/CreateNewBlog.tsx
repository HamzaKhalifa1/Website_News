import React from "react";
import './CreateNewBlog.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateNewBlog = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = (data: any) => {
        const formattedData = {
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
        };
        axios.post(`http://localhost:8000/blogs`, formattedData)
        reset();
    };

    return (
        <form id="new-blog-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                className={`title-input ${errors.title ? "error" : ""}`}
                placeholder="Enter title"
                {...register("title", { required: true, pattern: /^[A-Z]/, maxLength: 50 })}
            />
            <div id="title-error" className="error-message">
                {errors.title?.type === "required" && "Title is required."}
                {errors.title?.type === "pattern" && "Title must start with a capital letter."}
                {errors.title?.type === "maxLength" && "Title cannot exceed 50 characters."}
            </div>

            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                className={`textarea-input ${errors.description ? "error" : ""}`}
                placeholder="Enter description"
                {...register("description", { required: true, pattern: /^[a-zA-Z ]*$/, maxLength: 1000 })}
            ></textarea>
            <div id="description-error" className="error-message">
                {errors.description?.type === "required" && "Description is required."}
                {errors.description?.type === "pattern" && "Description can only contain letters and spaces."}
                {errors.description?.type === "maxLength" && "Description cannot exceed 1000 characters."}
            </div>

            <label htmlFor="image-url">Image URL:</label>
            <input
                type="text"
                id="image-url"
                className={`image-input ${errors.imageUrl ? "error" : ""}`}
                placeholder="Enter image URL"
                {...register("imageUrl", { pattern: /^(https?:\/\/[^\s]+)$/ })}
            />
            <div id="image-url-error" className="error-message">
                {errors.imageUrl?.type === "pattern" && "Please enter a valid URL."}
            </div>

            <input type="submit" />
        </form>
    );
};

export default CreateNewBlog;
