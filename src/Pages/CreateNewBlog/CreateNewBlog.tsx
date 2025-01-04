import React from "react";
import styles from './CreateNewBlog.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {hideLoader, showLoader} from "../../Store/LoaderSlice";
import {RootState} from "../../Store/Store";

const CreateNewBlog = () => {
    const language=useSelector((state: RootState) => state.language.Language);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        const formattedData = {
            [language]: [
                {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    imageUrl: data.imageUrl,
                }
            ]
        };

        dispatch(showLoader());
        setTimeout(() => {
            axios.post('http://localhost:8000/blogs', formattedData)
                .then(() => {
                    dispatch(hideLoader());
                })
                .catch(() => {
                    dispatch(hideLoader());
                    console.error("Error creating blog");
                });
        }, 2000);
        navigate('/');
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
                    pattern: language === "en" ? /^[A-Z]/ : /^[\u0600-\u06FF\s]*$/,
                    maxLength: 50,
                })}
                onKeyUp={() => trigger("title")}
            />
            <div id={styles['title-error']} className={styles['error-message']}>
                {errors.title?.type === "required" && <span>{t("Title is required.")}</span>}
                {errors.title?.type === "pattern" && (
                    <span>
                {language === "en"
                    ? t("Title must start with a capital letter.")
                    : t("Title must contains Arabic letters.")}
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
                    pattern: language === "en" ? /^[a-zA-Z ]*$/ : /^[\u0600-\u06FF\s]*$/,
                    maxLength: 1000,
                })}
                onKeyUp={() => trigger("description")}
            ></textarea>
            <div id={styles["description-error"]} className={styles['error-message']}>
                {errors.description?.type === "required" && <span>{t("Description is required.")}</span>}
                {errors.description?.type === "pattern" && (
                    <span>
                {language === "en"
                    ? t("Description can only contain English letters and spaces.")
                    : t("Description can only contain Arabic letters and spaces.")}
            </span>
                )}
                {errors.description?.type === "maxLength" &&
                    <span>{t("Description cannot exceed 1000 characters.")}</span>}
            </div>

            {/* Image URL Input */}
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
};

export default CreateNewBlog;
