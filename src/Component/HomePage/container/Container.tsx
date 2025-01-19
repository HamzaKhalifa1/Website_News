import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import styles from "./Container.module.css"
import React from "react";

const Container = ({ id, title, description, imageUrl, onDelete }: { id: number; title: string; description: string; imageUrl: any; onDelete: any }): JSX.Element => {
    return (
        <div className={styles.container}>
            <DeleteButton id={id} onDelete={onDelete}/>
            <EditButton id={id}/>
            <img className={styles.img} src={imageUrl} alt={title}/>
            <div>
                <h2 className={styles.largeText}>{title}</h2>
                <p className={styles.smallText}>{description}</p>
            </div>
        </div>
    );
};

export default Container