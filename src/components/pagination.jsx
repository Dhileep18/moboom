import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function MyPagination({ totalItems, pageSize, currentPage, onChange }) {
    const totalPages = Math.ceil(totalItems / pageSize);
    console.log("totalPages--", totalPages, totalItems, pageSize);
    return (
        <Pagination
            page={currentPage}
            count={totalPages}
            variant="outlined"
            color='secondary'
            shape="rounded"
            onChange={(_, page) => onChange(page)}
            renderItem={(item) => (
                <PaginationItem
                    component="div"
                    {...item}
                />
            )}
        />
    );
}

export default MyPagination;
