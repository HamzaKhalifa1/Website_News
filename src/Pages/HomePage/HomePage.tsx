import React, { useState, useCallback } from "react";
import styles from './HomePage.module.css';
import { useLoaderData } from "react-router-dom";
import DeleteButton from "../../Component/HomePage/DeleteButton/index";
import CustomPagination from "../../Component/HomePage/Pagination";

const HomePage = ({ id, title, description, imageUrl, onDelete }: { id: number; title: string; description: string; imageUrl: any; onDelete: any }): JSX.Element => {
    return (
        <div className={styles.container}>
            <DeleteButton id={id} onDelete={onDelete} />
            <img className={styles.img} src={imageUrl} alt={title} />
            <div>
                <h2 className={styles.Large_text}>{title}</h2>
                <p className={styles.small_text}>{description}</p>
            </div>
        </div>
    );
};

export default function Over_all() {
    const initialData2 = useLoaderData();
    const initialData =[...initialData2].reverse();

    const [paginatedData, setPaginatedData] = useState([]);
    const [data, setData] = useState(initialData);

    const handlePaginatedData = useCallback((data: any) => {
        setPaginatedData(data);
    }, []);

    return (
        <>
            <div id={styles.over_all}>
                {paginatedData && paginatedData.length > 0 ? paginatedData.map((item: any) => (
                    <HomePage key={item.id} {...item} onDelete={(id: any) => setData(data.filter((blog: any) => blog.id !== id))} />
                )) : <h1>No Data Found</h1>}
            </div>
            <div>
                <CustomPagination
                    initialData={data}
                    onPaginatedDataUpdate={handlePaginatedData}
                />
            </div>
        </>
    );
};
