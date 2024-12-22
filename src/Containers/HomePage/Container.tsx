import React, {useEffect, useState} from "react";
import styles from './Container.module.css'
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';





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
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/blogs`).then(res => {
            setData(res.data);

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        });
    }, []);

    return loading ? (
            <CircularProgress />
    ) : (
        <div id={styles.over_all}>
            {data && data.map((item: any) => (
                <Container key={item.id} {...item} />
            ))}
        </div>
    );
}
