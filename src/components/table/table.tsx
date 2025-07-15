'use client'
import React from 'react';
import TableContainer from "@/components/table/table-container";
import {mockData} from "@/util/mock-datas/table";

const Table = () => {
    const [pageNumber, setPageNumber] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const rowClick = () => {

    }
    const tableHeader = [
        { id: "organization", title: "ORGANIZATION" },
        { id: "username", title: "USERNAME" },
        { id: "email", title: "EMAIL" },
        { id: "phone", title: "PHONE NUMBER" },
        { id: "date_joined", title: "DATE JOINED" },
        { id: "status", title: "STATUS" },
    ];


    return (
        <div className={`w-full h-full pb-3`}>
            <TableContainer
                //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                tableData={mockData}
                tableHeader={tableHeader}
                handleRowClick={rowClick}
                totalPages={100}
                pageNumber={pageNumber}
                staticHeader='Organization'
                staticColunm='organization'
                hasNextPage={true}
                setPageNumber={setPageNumber}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                showKirkBabel={true}
            />
        </div>
    );
};

export default Table;