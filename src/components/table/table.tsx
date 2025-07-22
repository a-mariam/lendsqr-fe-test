'use client'
import React from 'react';
import TableContainer from "@/components/table/table-container";
import {getRandomStatusItem} from "@/util/mock-datas/table";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {FaUserCheck} from "react-icons/fa";
import {FaUserXmark} from "react-icons/fa6";
import {useRouter} from "next/navigation";
import {useGetAllUsersQuery} from "@/service/auth";
import dayjs from "dayjs";
import {useAppSelector} from "@/redux/store";
import { LuUserSearch } from "react-icons/lu";



interface TableRowData {
    [key: string]: string | number | null | React.ReactNode |object ;
}

export interface viewUser {
    username: string
    email: string
    phone: string
    dateJoined:string
    status:number
    company: {
        name: string
    }
}

export type viewAllUsers = viewUser & TableRowData;
const Table = () => {
    const [pageNumber, setPageNumber] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const router = useRouter();
    const searchTerm = useAppSelector(state => state.layout.searchTerm)

    const {data, isLoading, isFetching} = useGetAllUsersQuery({limit:100, search: searchTerm})
    console.log('data: ', data)

    const rowClick = (row: string | object | React.ReactNode) => {
        console.log('row: ',row)
        router.push("/users/details");
    }
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const tableHeader = [
        { id: "organization", title: "ORGANIZATION", selector: (row:  viewAllUsers) =>row?.company?.name},
        { id: "username", title: "USERNAME",selector: (row:  viewAllUsers) =>row.username },
        { id: "email", title: "EMAIL",selector: (row:  viewAllUsers) =>row.email },
        { id: "phone", title: "PHONE NUMBER",selector: (row:  viewAllUsers) =>row.phone },
        { id: "dateJoined", title: "DATE JOINED",selector: (row:  viewAllUsers) =><div className={`flex`}>{dayjs(row.dateJoined?.toString()).format('MMM D, YYYY')} {formattedTime}</div> },
        { id: "status", title: "STATUS",selector: (row:  viewAllUsers) => getRandomStatusItem(row) },
    ];

    const dropDownOption = [
        {name: 'View Details', id: '1', icon: <MdOutlineRemoveRedEye />},
        {name: 'Blacklist User ', id: '2', icon: <FaUserCheck />},
        {name: 'Activate User', id: '3', icon: <FaUserXmark />},
    ];

    const handleDropDownClick =  (id: string, row: TableRowData) => {
        console.log('id: ',id)
        if (id == '1'){
            console.log('row: ',row)
            router.push("/users/details");
        }
    }



    return (
        <div className={`w-full h-full pb-3`}>
            <TableContainer
                isLoading={isLoading || isFetching }
                tableData={data ? data?.users : []}
                tableHeader={tableHeader}
                handleRowClick={rowClick}
                totalPages={100}
                pageNumber={pageNumber}
                staticHeader='Organization'
                staticColunm='organization'
                hasNextPage={true}
                icon={<LuUserSearch className={` w-6 h-6 `} />}
                setPageNumber={setPageNumber}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                showKirkBabel={true}
                kirkBabDropdownOption={dropDownOption}
                handleDropDownClick={handleDropDownClick}
            />
        </div>
    );
};

export default Table;