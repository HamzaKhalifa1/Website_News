import {DataOfContainer} from "../../data";
import React from "react";
import styles from './Container.module.css'

const Container=({ title, description, imageUrl }: { title: string; description: string; imageUrl: any }):JSX.Element=>{
    return (
        <div className={styles.container}>
            <img className={styles.img} src={imageUrl} alt={title}/>
            <div>
                <h2 className={styles.Large_text}>{title}</h2>
                <p className={styles.small_text}>{description}</p>
            </div>
        </div>
    );
}

export default function Over_all() {
    return (
        <div id={styles.over_all}>
            <Container {...DataOfContainer[0]}/>
            <Container {...DataOfContainer[1]}/>
            <Container {...DataOfContainer[2]}/>
            <Container {...DataOfContainer[0]}/>
            <Container {...DataOfContainer[1]}/>
            <Container {...DataOfContainer[2]}/>
        </div>
    );
}