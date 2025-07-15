'use client'
import React from 'react';
import TableContainer from "@/components/table/table-container";
import {mockData} from "@/util/mock-datas/table";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {FaUserCheck} from "react-icons/fa";
import {FaUserXmark} from "react-icons/fa6";

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

    const dropDownOption = [
        {name: 'View Details', id: '1', icon: <MdOutlineRemoveRedEye />},
        {name: 'Blacklist User ', id: '2', icon: <FaUserCheck />},
        {name: 'Activate User', id: '3', icon: <FaUserXmark />},
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
                kirkBabDropdownOption={dropDownOption}
            />
        </div>
    );
};

export default Table;