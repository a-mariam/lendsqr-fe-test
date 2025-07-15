import React, { useState, useEffect, ElementType } from "react";
import styles from "./index.module.css";
import {
    Table,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
    TableHeader,
} from "@/components/ui/table";
import { IoFilterSharp } from "react-icons/io5";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select";
import {        DotsVerticalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
    Menubar,
    MenubarTrigger,
    MenubarContent,
    MenubarMenu,
    MenubarItem,
} from "@/components/ui/menubar";
import TableEmptyState from "@/components/empty-states/table-empty-state";
import TableSkeleton from "@/components/loaders/table-skelenton";
import {workSans, workSans600} from "@/app/fonts";
import Pagination from "./pagination";

interface ColumnProps<T> {
    title: string | React.ReactNode;
    id: string;
    selector?: (row: T) => React.ReactNode;
    sortable?: boolean;
}

interface TableRowData {
    [key: string]: string | number | null | React.ReactNode | object;
}

interface DropdownOption {
    name: string;
    id: string;
}

interface Props<T extends TableRowData> {
    tableData: T[];
    tableHeader: ColumnProps<T>[];
    handleRowClick: (row: T) => void;
    handleDropDownClick?: (id: string, row: TableRowData) => void;
    tableHeight?: number;
    sx?: string;
    tableStyle?: string;
    staticColunm?: string;
    staticHeader?: string;
    showKirkBabel?: boolean;
    kirkBabDropdownOption?: DropdownOption[];
    sideBarTabName?: string;
    emptyStateStyle?: string;
    icon?: ElementType | React.ReactNode;
    optionalFilterName?: string;
    tableCellStyle?: string;
    condition?: boolean;
    isLoading?: boolean;
    searchEmptyState?: boolean;
    totalPages: number;
    pageNumber: number;
    hasNextPage: boolean;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    staticColumnKey?: string;
    rowsPerPage: number;
    setRowsPerPage: (pageNumber: number) => void;
}

function DataTable<T extends TableRowData>({
                                               searchEmptyState,
                                               tableHeader,
                                               tableData,
                                               handleRowClick,
                                               tableHeight,
                                               sx,
                                               tableStyle,
                                               staticColunm,
                                               staticHeader,
                                               showKirkBabel,
                                               kirkBabDropdownOption,
                                               handleDropDownClick,
                                               sideBarTabName,
                                               emptyStateStyle,
                                               icon,
                                               optionalFilterName,
                                               tableCellStyle,
                                               condition,
                                               isLoading,
                                               totalPages,
                                               pageNumber,
                                               hasNextPage,
                                               setPageNumber,
                                               staticColumnKey,
                                               rowsPerPage,
                                               setRowsPerPage,
                                           }: Props<T>) {

    const [selectedColumn, setSelectedColumn] = useState(tableHeader[1].id);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    console.log('pageNumber: ', pageNumber)

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    const safeRowsPerPage = rowsPerPage && rowsPerPage > 0 ? rowsPerPage : 10;

    const maxPage = Math.ceil(tableData.length / safeRowsPerPage);
    const validPageNumber = Math.min(pageNumber, maxPage - 1);

    const paginatedData = tableData.slice(
        validPageNumber * safeRowsPerPage,
        (validPageNumber + 1) * safeRowsPerPage
    );


    const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
        setPageNumber(newPage - 1);
    };

    const handleNextPage = () => {
        if (hasNextPage) setPageNumber((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (pageNumber > 0) setPageNumber((prev) => prev - 1);
    };

    const handleDropdownOpen = () => setDropdownOpen(!dropdownOpen);

    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case "active": return "bg-green-100 text-green-700";
            case "inactive": return "bg-gray-100 text-gray-600";
            case "blacklisted": return "bg-red-100 text-red-600";
            case "pending": return "bg-yellow-100 text-yellow-800";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    const renderCellContent = (column: ColumnProps<T>, row: T) => {
        const value = column.selector ? column.selector(row) : row[column.id];
        if (column.id === "status" && typeof value === "string") {
            return (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(value)}`}>{value}</span>
            );
        }
        if (React.isValidElement(value)) return value;
        if (typeof value === "object" && value !== null) return JSON.stringify(value);
        return value;
    };

    const isLastPage = pageNumber + 1 === totalPages;
    // const staticColumn = tableHeader.find((header) => header.id === staticColumnKey);
    return (
        <div className="w-full">
            {isLoading ? (
                <TableSkeleton />
            ) : tableData.length === 0 ? (
                searchEmptyState ? (
                    <TableEmptyState icon={<MagnifyingGlassIcon />} name={sideBarTabName} className={emptyStateStyle} optionalFilterName={optionalFilterName} condition={condition} isSearch />
                ) : (
                    <TableEmptyState icon={icon} name={sideBarTabName} className={emptyStateStyle} optionalFilterName={optionalFilterName} condition={condition} />
                )
            ) : (
                <>
                    <div className={`hidden md:block block`}>
                        <div style={{ height: `${tableHeight}vh`, overflow: "auto" }} className={` ${styles.dropShaw} hidden md:block`}>
                            <Table>
                                <TableHeader className="bg-white sticky top-0">
                                    <TableRow className="bg-white ">
                                        {tableHeader.map((column) => (
                                            <TableHead key={column.id} className="bg-white  h-fit py-6">
                                                <div className={`${workSans600.className} flex gap-2 text-[#545F7D] text-[12px] `}>
                                                    {column.title}
                                                    <IoFilterSharp className={`text-[#545F7D] mt-auto mb-auto `} />
                                                </div>
                                            </TableHead>
                                        ))}
                                        {showKirkBabel && <TableHead className="bg-white h-12" />}
                                    </TableRow>
                                </TableHeader>
                                <TableBody className={`bg-white `}>
                                    {paginatedData.map((row, rowIndex) => (
                                        <TableRow key={rowIndex} className={sx}>
                                            {tableHeader.map((column) => (
                                                <TableCell key={`${column.id}${rowIndex}`} onClick={() => handleRowClick(row)} className={`h-1 ${isLastPage ? "border-b" : ""} ${tableCellStyle} overflow-hidden whitespace-nowrap text-ellipsis max-w-[80px]`}>
                                                    <div className={`${styles.tableBodyItem} ${tableStyle} h-fit py-3  text-[#545F7D]  text-[14px]  ${workSans.className}  truncate`}>
                                                        {renderCellContent(column, row)}
                                                    </div>
                                                </TableCell>
                                            ))}
                                            {showKirkBabel && (
                                                <TableCell className={`w-0 ${isLastPage ? "border-b" : ""}`}>
                                                    <Menubar>
                                                        <MenubarMenu>
                                                            <MenubarTrigger asChild className="border-none shadow-none cursor-pointer">
                                                                <Button className="border-none shadow-none">
                                                                    <DotsVerticalIcon className="w-5 h-6 text-grey500 font-extrabold" />
                                                                </Button>
                                                            </MenubarTrigger>
                                                            <MenubarContent className="bg-white shadow-md rounded-md mr-11 relative bottom-6 min-w-[8rem] mt-3">
                                                                {kirkBabDropdownOption?.map((option, index) => (
                                                                    <MenubarItem key={index} className={`cursor-pointer mt-2 pr-8 ${option.id === "3" ? "text-error500 focus:text-error500" : ""}`} onClick={() => handleDropDownClick?.(option.id, row)}>
                                                                        {option.name}
                                                                    </MenubarItem>
                                                                ))}
                                                            </MenubarContent>
                                                        </MenubarMenu>
                                                    </Menubar>
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <Pagination
                            currentPage={pageNumber + 1}
                            totalPages={Math.ceil(tableData.length / rowsPerPage)}
                            pageSize={rowsPerPage}
                            totalItems={tableData.length}
                            onPageChange={(page) => setPageNumber(page - 1)}
                            handleNext={handleNextPage}
                            setRowsPerPage={setRowsPerPage}

                        />
                    </div>
                    <div className={`md:hidden lg:hidden`}>
                    <div className={`md:hidden ${styles.dropShaw} rounded-md`} id="datatable-mobile" data-testid="datatable-mobile">
                        <div style={{ height: `${tableHeight}vh`, overflow: "auto" }}>
                            <Table>
                                <TableHeader className="sticky top-0 bg-white">
                                    <TableRow className={` h-fit py-6`}>
                                        <TableHead
                                            className={`${workSans600.className} f mt-auto mb-auto text-[#545F7D] text-[16px]`}
                                        >{staticHeader}</TableHead>
                                        <TableHead>
                                            <Select
                                                value={selectedColumn}
                                                onValueChange={(val: string) => setSelectedColumn(val)}
                                                onOpenChange={handleDropdownOpen}
                                            >
                                                <SelectTrigger className={`h-4 border-none focus:ring-0 ${workSans600.className} f mt-auto mb-auto text-[#545F7D] text-[16px]`}>
                                                    <div className="truncate max-w-[120px]">
                                                        <SelectValue className={`${workSans600.className} f mt-auto mb-auto text-[#545F7D] text-[16px]`} placeholder="Select" />
                                                    </div>
                                                    {/*<div className="ml-4">*/}
                                                    {/*    {dropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}*/}
                                                    {/*</div>*/}
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {tableHeader.filter((header) => header.id !== staticColunm).map((header) => (
                                                            <SelectItem className={`${workSans600.className}  mt-auto mb-auto text-[#545F7D] text-[16px]`} key={header.id} value={header.id}>{header.title}</SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {paginatedData.map((row, rowIndex) => (
                                        <TableRow key={rowIndex} className={`h-fit py-3  text-[#545F7D] py-4 h-fit  text-[14px]  ${workSans.className}`} onClick={() => handleRowClick(row)}>
                                            <TableCell className="truncate px-4 py-2">
                                                {renderCellContent(
                                                    tableHeader.find((h) => h.id === staticColunm)!,
                                                    row
                                                )}
                                            </TableCell>
                                            <TableCell className="truncate px-4 py-4">
                                                {renderCellContent(
                                                    tableHeader.find((h) => h.id === selectedColumn)!,
                                                    row
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <Pagination
                        currentPage={pageNumber + 1}
                        totalPages={Math.ceil(tableData.length / rowsPerPage)}
                        pageSize={rowsPerPage}
                        totalItems={tableData.length}
                        onPageChange={(page) => setPageNumber(page - 1)}
                        handleNext={handleNextPage}
                        setRowsPerPage={setRowsPerPage}
                    />
                    </div>
                </>
            )}
        </div>
    );
}

export default DataTable;