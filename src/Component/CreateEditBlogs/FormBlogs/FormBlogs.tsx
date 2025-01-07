import styles from "./FormBlogs.module.css"
import React from "react";
import cookies from "js-cookie";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {hideLoader, showLoader} from "../../../store/LoaderSlice";
import {useDispatch} from "react-redux";
import BlogService from "../../../services/BlogService";

interface FormBlogsProps {
    isVisited?: boolean,
    id?: string | null
}

const FormBlogs = ({isVisited, id}: FormBlogsProps) => {
    const lng = cookies.get('i18next') || 'en';
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}, trigger} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blogService =new BlogService({});



    const onSubmit = (data: any) => {
        dispatch(showLoader());
        if (isVisited) {
            blogService.putBlog(data,id,lng)
                .then(() => {
                    setTimeout(() => {
                        dispatch(hideLoader());
                    }, 1000);
                    navigate('/');
                });
        } else {
            blogService.postBlog(data,lng)
                .then(() => {
                    setTimeout(() => {
                        dispatch(hideLoader());
                    }, 1000);
                    navigate('/');
                });
        }
    };


    return (
        <form id={styles['new-blog-form']} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">{t("Title")}</label>
            <input
                type="text"
                id="title"
                className={`${styles["title-input"]} ${errors.title ? styles.error : ""}`}
                placeholder={t("Enter title")}
                {...register("title", {
                    required: true,
                    pattern: lng === "en" ? /^[A-Z]/ : /^[\u0600-\u06FF\s]*$/,
                    maxLength: 50,
                })}
                onKeyUp={() => trigger("title")}
            />
            <div id={styles['title-error']} className={styles['error-message']}>
                {errors.title?.type === "required" && <span>{t("Title is required.")}</span>}
                {errors.title?.type === "pattern" && (
                    <span>
                {lng === "en"
                    ? t("Title must start with a capital letter.")
                    : t("Title must contains Arabic letter")}
            </span>
                )}
                {errors.title?.type === "maxLength" && <span>{t("Title cannot exceed 50 characters.")}</span>}
            </div>

            <label htmlFor="description">{t("Description")}</label>
            <textarea
                id={styles["description"]}
                className={`${styles["textarea-input"]} ${errors.description ? styles.error : ""}`}
                placeholder={t("Enter description")}
                {...register("description", {
                    required: true,
                    pattern: lng === "en" ? /^[a-zA-Z ]*$/ : /^[\u0600-\u06FF\s]*$/,
                    maxLength: 1000,
                })}
                onKeyUp={() => trigger("description")}
            ></textarea>
            <div id={styles["description-error"]} className={styles['error-message']}>
                {errors.description?.type === "required" && <span>{t("Description is required.")}</span>}
                {errors.description?.type === "pattern" && (
                    <span>
                {lng === "en"
                    ? t("Description can only contain English letters and spaces.")
                    : t("Description can only contain Arabic letters and spaces.")}
            </span>
                )}
                {errors.description?.type === "maxLength" &&
                    <span>{t("Description cannot exceed 1000 characters.")}</span>}
            </div>

            <label htmlFor="image-url">{t("Image URL:")}</label>
            <input
                type="text"
                id={styles["image-url"]}
                className={`${styles["image-input"]} ${errors.imageUrl ? styles.error : ""}`}
                placeholder={t("Enter image URL")}
                {...register("imageUrl", {pattern: /^(https?:\/\/[^\s]+)$/})}
                onKeyUp={() => trigger("imageUrl")}
            />
            <div id={styles["image-url-error"]} className={styles['error-message']}>
                {errors.imageUrl?.type === "pattern" && <span>{t("Please enter a valid URL.")}</span>}
            </div>

            <input type="submit" value={t("Submit")}/>
        </form>
    );
}

export default FormBlogs;