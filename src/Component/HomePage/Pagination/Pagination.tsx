import React, {useState,useEffect} from "react";
import Pagination from '@mui/material/Pagination';


const NumberOFBlogs = 6;


const CustomPagination  = ({initialData, onPaginatedDataUpdate}: { initialData: any[]; onPaginatedDataUpdate: (data: any[]) => void; }) => {

    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const startIndex = (currentPage - 1) * NumberOFBlogs;
        const paginatedData = initialData.slice(startIndex, startIndex + NumberOFBlogs);
        onPaginatedDataUpdate(paginatedData);
    }, [currentPage, initialData, onPaginatedDataUpdate]);

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: '20px 0'}}>
            <Pagination
                count={Math.ceil((initialData?.length || 0) / NumberOFBlogs)}
                color="primary"
                page={currentPage}
                onChange={handlePageChange}
            />
        </div>
    );
}

export default CustomPagination ;