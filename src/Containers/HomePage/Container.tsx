import React, { useState } from "react";
import styles from './Container.module.css';
import Pagination from '@mui/material/Pagination';
import {useLoaderData} from "react-router-dom";
import DeleteButton from "../../Componant/Button/index";
import {useLoader} from "../../Contexts/LoaderContext/LoaderContext";

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
    const {showLoader, hideLoader} = useLoader();
    const initialData2  = useLoaderData();
    const initialData = [...initialData2].reverse();
    const [data, setData] = useState(initialData );
    const [currentPage, setCurrentPage] = useState(1);

    const  handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        showLoader();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        hideLoader();
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * NumberOFBlogs;
    const paginatedData = data ? data.slice(startIndex, startIndex + NumberOFBlogs) : [];

    return(
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
