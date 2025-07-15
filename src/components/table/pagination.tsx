'use client';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    handleNext?: () => void;
    setRowsPerPage: (page: number) => void;

}
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup,
} from "@/components/ui/select";

const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   totalPages,
                                                   pageSize,
                                                   totalItems,
                                                   onPageChange,
                                                   setRowsPerPage,
    handleNext,
                                               }) => {
    // const startItem = (currentPage - 1) * pageSize + 1;
    // const endItem = Math.min(currentPage * pageSize, totalItems);
    const [rowsPerPage, setRowPerPage] = React.useState(10);


    const set = (pageNumber: number) => {
        setRowsPerPage(pageNumber);
        setRowPerPage(pageNumber);
    }

    const generatePageNumbers = () => {
        const items = [];

        if (totalPages > 0) items.push(1);
        if (totalPages > 1) items.push(2);
        if (totalPages > 5) {
            if (currentPage > 3) items.push('...');

            for (let i = Math.max(3, currentPage - 1); i <= Math.min(totalPages - 2, currentPage + 1); i++) {
                items.push(i);
            }
            if (currentPage < totalPages - 2) items.push('...');


            if (totalPages > 2) items.push(totalPages - 1);
            if (totalPages > 3) items.push(totalPages);
        } else {

            for (let i = 3; i <= totalPages; i++) {
                items.push(i);
            }
        }

        return items;
    };
    return (
        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
                {totalItems > 0 ? (
                    <>
      <div className={`flex gap-2  `}>
          <p className={`mt-auto mb-auto`}>Showing{" "}</p>
          <Select
              value={pageSize.toString()}
              onValueChange={(value) => set(Number(value))}
          >
              <SelectTrigger className="border-0 rounded-md px-3 w-fit h-fit  py-1 focus:outline-none bg-[#e5e8ee] text-sm" >
                  {rowsPerPage}
              </SelectTrigger>

              <SelectContent>
                  <SelectGroup >
                      {[10, 25, 50, 100].map((size) => (
                          <SelectItem key={size} value={size.toString()}>
                              {size}
                          </SelectItem>
                      ))}
                  </SelectGroup>
              </SelectContent>
          </Select>
          {/*{Math.min(currentPage * pageSize, totalItems)} of {totalItems}*/}

          <p className={`mt-auto mb-auto`}> out of{" "}</p>
      </div>
                    </>
                ) : (
                    <span>Showing 0 of 0</span>
                )}

                <p>{totalItems}</p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                >
                    <ChevronLeft size={16} />
                </button>

                {generatePageNumbers().map((page, index) =>
                        page === '...' ? (
                            <span key={index} className="px-2 text-gray-500">
                                ...
                            </span>
                        ) : (
                            <button
                                key={index}
                                onClick={() => onPageChange(Number(page))}
                                className={`px-2 py-1 rounded-md text-sm ${
                                    currentPage === page
                                        ? 'text-[#213F7D] font-semibold'
                                        : 'text-gray-600 hover:text-[#213F7D]'
                                }`}
                            >
                                {page}
                            </button>
                        )
                )}

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`p-1 rounded-md ${currentPage === totalPages ? `bg-gray-100  ` : `bg-gray-100 hover:bg-gray-200 `}   disabled:opacity-50`}
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
