import React, { useEffect, useState } from "react";
import styles from './Container.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import {useLoaderData} from "react-router-dom";
import DeleteButton from "../../Componant/Button/index";

const NumberOFBlogs = 6;

const Container = ({ id, title, description, imageUrl, onDelete }: {id:number; title: string; description: string; imageUrl: any;onDelete:any }): JSX.Element => {
    return (
        <div className={styles.container}>
            <DeleteButton id={id} onDelete={onDelete}/>
            <img className={styles.img} src={imageUrl} alt={title} />
            <div>
                <h2 className={styles.Large_text}>{title}</h2>
                <p className={styles.small_text}>{description}</p>
            </div>
        </div>
    );
};

export default function Over_all() {
    const initialData  = useLoaderData();
    const [data, setData] = useState(initialData );
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        if (data) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }

    }, [data]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
        setCurrentPage(page);
        setLoading(true);
    };

    const startIndex = (currentPage - 1) * NumberOFBlogs;
    const paginatedData = data ? data.slice(startIndex, startIndex + NumberOFBlogs) : [];

    return loading ?
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
            <CircularProgress/>
        </div>
        : (
            <>
                <div id={styles.over_all}>
                    {paginatedData.map((item: any) => (
                        <Container key={item.id} {...item} onDelete={(id:any) => setData(data.filter((blog:any) => blog.id !== id))}/>
                    ))}
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: '20px 0'}}>
                    <Pagination
                        count={Math.ceil((data?.length || 0) / NumberOFBlogs)}
                        color="primary"
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            </>
        );
};
