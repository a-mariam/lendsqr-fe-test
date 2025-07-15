import React from 'react';
import Table from "@/components/table/table";
import {workSans500} from "@/app/fonts";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {FaUserCheck} from "react-icons/fa";
import {FaUserXmark} from "react-icons/fa6";
import Card, {CardProps} from "@/components/cards/card";

const ViewAllUser = () => {
    const cardItems : CardProps []= [
        {name: 'USERS', id: 'users', icon: <MdOutlineRemoveRedEye />, itemAmount: 1212},
        {name: 'ACTIVE USERS ', id: 'activeUsers', icon: <FaUserCheck />,itemAmount: 1212},
        {name: 'USERS WITH LOANS', id: 'usersWithLoans', icon: <FaUserXmark />,itemAmount: 1212},
        {name: 'USERS WITH SAVINGS', id: 'usesWithSaving', icon: <FaUserXmark />,itemAmount: 1212},

    ];
    return (
        <div className={` md:px-8 grid gap-4  md:py-8 lg:px-8 lg:py-8 py-3 px-6 `}>
            <p id={'usersText'}
               data-testid={'usersText'}
               className={`${workSans500.className} text-[24px] text-[#213F7D]`}>Users</p>
            <div className={` flex w-full gap-4 mb-6   `}>
                {cardItems?.map((item: CardProps) => (
                    <div key={item.id} className={`w-full h-full `}>
                        <Card name={item.name} id={item.id} itemAmount={item?.itemAmount} icon={item?.icon} />
                    </div>
                ))}
            </div>
            <Table/>
        </div>
    );
};

export default ViewAllUser;