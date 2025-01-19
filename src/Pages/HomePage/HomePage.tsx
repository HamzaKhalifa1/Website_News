import React, { useState, useCallback } from "react";
import styles from './HomePage.module.css';
import { useLoaderData } from "react-router-dom";
import Container from "../../Component/HomePage/container";
import CustomPagination from "../../Component/HomePage/pagination";
import Main_Title from "../../Component/HomePage/MainTitle";

export default function HomePage() {
    const initialData2 = useLoaderData();
    const initialData =[...initialData2].reverse();

    const [paginatedData, setPaginatedData] = useState([]);
    const [data, setData] = useState(initialData);

    const handlePaginatedData = useCallback((data: any) => {
        setPaginatedData(data);
    }, []);

    return (
        <>
            <Main_Title/>
            <div id={styles.homePage}>
                {paginatedData && paginatedData.length > 0 ? paginatedData.map((item: any) => (
                    <Container key={item.id} {...item} onDelete={(id: any) => setData(data.filter((blog: any) => blog.id !== id))} />
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
