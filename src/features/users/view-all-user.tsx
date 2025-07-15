import React from 'react';
import Table from "@/components/table/table";
import {workSans500} from "@/app/fonts";

const ViewAllUser = () => {
    return (
        <div className={` md:px-8 md:py-8 lg:px-8 lg:py-8 py-3 px-6 `}>
            <p id={'usersText'}
               data-testid={'usersText'}
               className={`${workSans500.className} text-[24px] text-[#213F7D]`}>Users</p>
            <Table/>
        </div>
    );
};

export default ViewAllUser;