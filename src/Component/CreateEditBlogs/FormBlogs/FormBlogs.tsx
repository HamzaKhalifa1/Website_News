import React, { useEffect, useState } from "react";
import styles from "./FormBlogs.module.css";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../../store/LoaderSlice";
import { useDispatch } from "react-redux";
import BlogService from "../../../services/BlogService";

interface FormBlogsProps {
    isVisited?: boolean;
    id?: string | null;
}

const FormBlogs = ({ isVisited, id }: FormBlogsProps) => {
    const lng = cookies.get("i18next") || "en";
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (isVisited && id) {
            BlogService.getBlogs(lng).then((blogs) => {
                const blog = blogs.find((blog: any) => blog.id === id);
                if (blog) {
                    setTitle(blog.title);
                    setDescription(blog.description);
                    setImageUrl(blog.imageUrl);
                }
            });
        }
    }, [isVisited, id, lng]);

    const onSubmit = (data: any) => {
        dispatch(showLoader());
        if (isVisited) {
            BlogService.putBlog(data, id, lng)
                .then(() => {
                    setTimeout(() => {
                        dispatch(hideLoader());
                    }, 1000);
                    navigate("/");
                });
        } else {
            BlogService.postBlog(data, lng)
                .then(() => {
                    setTimeout(() => {
                        dispatch(hideLoader());
                    }, 1000);
                    navigate("/");
                });
        }
    };

    return (
        <form id={styles.newBlogForm} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">{t("title")}</label>
            <input
                type="text"
                id="title"
                className={`${styles["title-input"]} ${errors.title ? styles.error : ""}`}
                placeholder={isVisited ? title : t("enterTitle")}
                {...register("title", {
                    required: t("titleIsRequired"),
                    pattern: {
                        value: lng === "en" ? /^[A-Z][a-zA-Z\s]+$/ : /^[\u0600-\u06FF\s]*$/,
                        message: lng === "en"
                            ? t("titleMustStartWithACapitalLetterAndEnglishWords")
                            : t("titleMustContainsArabicLetter"),
                    },
                    maxLength: {
                        value: 50,
                        message: t("titleCannotExceed50Characters"),
                    },
                })}
                onKeyUp={() => trigger("title")}
            />
            <div id={styles["title-error"]} className={styles.errorMessage}>
                {errors.title && <span>{errors.title.message as string}</span>}
            </div>

            <label htmlFor="description">{t("description")}</label>
            <textarea
                id={styles["description"]}
                className={`${styles["textarea-input"]} ${errors.description ? styles.error : ""}`}
                placeholder={isVisited ? description : t("enterDescription")}
                {...register("description", {
                    required: t("descriptionIsRequired"),
                    pattern: {
                        value: lng === "en" ? /^[a-zA-Z ]*$/ : /^[\u0600-\u06FF\s]*$/,
                        message: lng === "en"
                            ? t("descriptionCanOnlyContainEnglishLettersAndSpaces")
                            : t("descriptionCanOnlyContainArabicLettersAndSpaces"),
                    },
                    maxLength: {
                        value: 1000,
                        message: t("descriptionCannotExceed1000Characters"),
                    },
                })}
                onKeyUp={() => trigger("description")}
            ></textarea>
            <div id={styles["description-error"]} className={styles.errorMessage}>
                {errors.description && <span>{errors.description.message as string}</span>}
            </div>

            <label htmlFor="image-url">{t("imageUrl")}</label>
            <input
                type="text"
                id={styles["image-url"]}
                className={`${styles["image-input"]} ${errors.imageUrl ? styles.error : ""}`}
                placeholder={isVisited ? imageUrl : t("enterImageUrl")}
                {...register("imageUrl", {
                    pattern: {
                        value: /^(https?:\/\/[^\s]+)$/,
                        message: t("pleaseEnterAValidUrl"),
                    },
                })}
                onKeyUp={() => trigger("imageUrl")}
            />
            <div id={styles["image-url-error"]} className={styles.errorMessage}>
                {errors.imageUrl && <span>{errors.imageUrl.message as string}</span>}
            </div>
            <input type="submit" value={t("submit")} />
        </form>
    );
};

export default FormBlogs;
