import React, { useEffect, useState } from "react";
import styles from './Container.module.css';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';

const NumberOFBlogs = 6;

const Container = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: any }): JSX.Element => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={imageUrl} alt={title} />
            <div>
                <h2 className={styles.Large_text}>{title}</h2>
                <p className={styles.small_text}>{description}</p>
            </div>
        </div>
    );
};

export default function Over_all() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8000/blogs`).then(res => {
            setData(res.data);
            setTimeout(()=>{
                setLoading(false);
            },2000)
        });
    }, []);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * NumberOFBlogs;
    const paginatedData = data ? data.slice(startIndex, startIndex + NumberOFBlogs) : [];

    return loading ?
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
            <CircularProgress/>
        </div>
        :(
            <>
                <div id={styles.over_all}>
                    {paginatedData.map((item: any) => (
                        <Container key={item.id} {...item} />
                    ))}
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center",padding: '20px 0' }}>
                    <Pagination
                        count={Math.ceil((data?.length || 0) / NumberOFBlogs)}
                        color="primary"
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            </>
        );
}
