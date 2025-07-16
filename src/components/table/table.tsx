'use client'
import React from 'react';
import TableContainer from "@/components/table/table-container";
import {mockData} from "@/util/mock-datas/table";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {FaUserCheck} from "react-icons/fa";
import {FaUserXmark} from "react-icons/fa6";



interface TableRowData {
    [key: string]: string | number | null | React.ReactNode  ;
}

interface viewUser {
    username: string
    email: string
    phone: string
    dateJoined:string
    status:number
}

type viewAllUsers = viewUser & TableRowData;
const Table = () => {
    const [pageNumber, setPageNumber] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const rowClick = () => {

    }
    const tableHeader = [
        { id: "organization", title: "ORGANIZATION", selector: (row:  viewAllUsers) =>row.organization},
        { id: "username", title: "USERNAME",selector: (row:  viewAllUsers) =>row.username },
        { id: "email", title: "EMAIL",selector: (row:  viewAllUsers) =>row.email },
        { id: "phone", title: "PHONE NUMBER",selector: (row:  viewAllUsers) =>row.phone },
        { id: "dateJoined", title: "DATE JOINED",selector: (row:  viewAllUsers) =>row.dateJoined },
        { id: "status", title: "STATUS",selector: (row:  viewAllUsers) =>row.status },
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