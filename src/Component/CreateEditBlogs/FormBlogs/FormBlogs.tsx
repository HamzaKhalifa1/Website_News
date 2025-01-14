import styles from "./FormBlogs.module.css"
import React from "react";
import cookies from "js-cookie";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
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
            <label htmlFor="title">{t("title")}</label>
            <input
                type="text"
                id="title"
                className={`${styles["title-input"]} ${errors.title ? styles.error : ""}`}
                placeholder={t("enterTitle")}
                {...register("title", {
                    required: t("titleIsRequired"),
                    pattern: {
                        value: lng === "en" ? /^[A-Z]/ : /^[\u0600-\u06FF\s]*$/,
                        message: lng === "en"
                            ? t("titleMustStartWithACapitalLetter")
                            : t("titleMustContainsArabicLetter"),
                    },
                    maxLength: {
                        value: 50,
                        message: t('titleCannotExceed50Characters'),
                    },
                })}
                onKeyUp={() => trigger("title")}
            />
            <div id={styles['title-error']} className={styles['error-message']}>
                {errors.title && <span >{errors.title.message as string}</span>}
            </div>

            <label htmlFor="description">{t("description")}</label>
            <textarea
                id={styles["description"]}
                className={`${styles["textarea-input"]} ${errors.description ? styles.error : ""}`}
                placeholder={t("enterDescription")}
                {...register("description", {
                    required: t('descriptionIsRequired'),
                    pattern: {
                        value: lng === "en" ? /^[a-zA-Z ]*$/ : /^[\u0600-\u06FF\s]*$/,
                        message: lng === "en"
                            ? t("descriptionCanOnlyContainEnglishLettersAndSpaces")
                            : t("descriptionCanOnlyContainArabicLettersAndSpaces"),
                    },
                    maxLength: {
                        value: 1000,
                        message: t('descriptionCannotExceed1000Characters'),
                    },
                })}
                onKeyUp={() => trigger("description")}
            ></textarea>
            <div id={styles["description-error"]} className={styles['error-message']}>
                {errors.description && <span >{errors.description.message as string}</span>}
            </div>

            <label htmlFor="image-url">{t("imageUrl")}</label>
            <input
                type="text"
                id={styles["image-url"]}
                className={`${styles["image-input"]} ${errors.imageUrl ? styles.error : ""}`}
                placeholder={t("enterImageUrl")}
                {...register("imageUrl",
                    {
                        pattern: {
                            value: /^(https?:\/\/[^\s]+)$/ ,
                            message: t("pleaseEnterAValidUrl")
                        }
                    }
                    )
            }
                onKeyUp={() => trigger("imageUrl")}
            />
            <div id={styles["image-url-error"]} className={styles['error-message']}>
                {errors.imageUrl && <span >{errors.imageUrl.message as string}</span>}
            </div>
            <input type="submit" value={t("submit")}/>
        </form>
    );
}

export default FormBlogs;
