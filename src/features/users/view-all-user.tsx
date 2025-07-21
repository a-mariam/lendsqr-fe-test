import React from 'react';
import Table from "@/components/table/table";
import {workSans500} from "@/app/fonts";
import Card, {CardProps} from "@/components/cards/card";
import styles from "@/features/index.module.css"

const ViewAllUser = () => {
    const cardItems : CardProps []= [
        {name: 'USERS', id: 'users', imageUrl: '/Couple.svg',imageBackgroundColor: '#fce8ff', itemAmount: 1212},
        {name: 'ACTIVE USERS ', id: 'activeUsers', imageUrl: '/People.svg',imageBackgroundColor: '#efe8ff',itemAmount: 1212},
        {name: 'USERS WITH LOANS', id: 'usersWithLoans', imageUrl: '/Database.svg',imageBackgroundColor: '#feefed',itemAmount: 1212},
        {name: 'USERS WITH SAVINGS', id: 'usesWithSaving', imageUrl: '/Data.svg',imageBackgroundColor: '#ffebf0', itemAmount: 1212},

    ];
    return (
        <div className={` md:px-8 grid gap-4  md:py-8 lg:px-8 lg:py-8 py-3 px-6 `}>
            <p id={'usersText'}
               data-testid={'usersText'}
               className={`${workSans500.className} hidden pt-6 pb-4   md:flex lg:flex text-[24px] text-[#213F7D]`}>Users</p>
            <div className={` ${styles.overflowVerticallyWithoutBg}  flex w-full gap-8 md:gap-4 mb-6   `}>
                {cardItems?.map((item: CardProps) => (
                    <div key={item.id} className={`w-full md:py-0 py-6  h-full `}>
                        <Card imageBackgroundColor={item.imageBackgroundColor} name={item.name} id={item.id} itemAmount={item?.itemAmount} imageUrl={item?.imageUrl} />
                    </div>
                ))}
            </div>
            <Table/>
        </div>
    );
};

export default ViewAllUser;