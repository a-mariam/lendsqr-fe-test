'use client'
import React from 'react';
import Table from "@/components/table/table";
import {inter, workSans500} from "@/app/fonts";
import Card, {CardProps} from "@/components/cards/card";
import styles from "@/features/index.module.css"
import {useGetAllUsersQuery} from "@/service/auth";
import {Input} from "@/components/ui/input";
import {store} from "@/redux/store";
import {setSearchTerm} from "@/redux/slice/layoutSlice";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

const ViewAllUser = () => {
    const {data} = useGetAllUsersQuery({limit:100})


    const cardItems : CardProps []= [
        {name: 'USERS', id: 'users', imageUrl: '/Couple.svg',imageBackgroundColor: '#fce8ff', itemAmount: `${data ? `100`: `0`}`},
        {name: 'ACTIVE USERS ', id: 'activeUsers', imageUrl: '/People.svg',imageBackgroundColor: '#efe8ff',itemAmount: `${data ? `100`: `0`}`},
        {name: 'USERS WITH LOANS', id: 'usersWithLoans', imageUrl: '/Database.svg',imageBackgroundColor: '#feefed',itemAmount: `${data ? `100`: `0`}`},
        {name: 'USERS WITH SAVINGS', id: 'usesWithSaving', imageUrl: '/Data.svg',imageBackgroundColor: '#ffebf0', itemAmount: `${data ? `101`: `0`}`},

    ];
    return (
        <div className={` md:px-8 grid gap-4  md:py-8 lg:px-8 lg:py-8 py-3 px-6 `}>
            <p id={'usersText'}
               data-testid={'usersText'}
               className={`${workSans500.className} hidden pt-6 pb-4   md:flex lg:flex text-[24px] text-[#213F7D]`}>Users</p>
            <div className=" w-[80vw] mt-4  sm:flex  md:mt-auto md:mb-auto focus:border-none    md:hidden lg:hidden flex  ">
                <div className="relative w-full justify-end ">
                    <Input
                        id={'searchInput'}
                        data-testid={`searchInput`}
                        onChange={(e) => {store.dispatch(setSearchTerm(e.target.value))}}
                        type="text"
                        placeholder="Search for anything"
                        className={` ${inter.className}  placeholder:text-[14px] placeholder:text-[#cdd1da]  text-[15px] text-[#cdd1da] w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#39CDCC] focus:border-transparent`}
                    />
                    <button className="absolute right-0 top-0 h-full px-5 bg-[#39CDCC] text-white rounded-r-lg hover:bg-[#39CDCC]">
                        <MagnifyingGlassIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className={` ${styles.overflowVertically}  bg-[#fbfbfb] h-fit py-4 px-4  md:py-4 md:px-4   w-full gap-8 md:gap-4 mb-6   `}>
                {cardItems?.map((item: CardProps) => (
                    // <div key={item.id} className={`w-full md:py-0 py-6  h-full `}>
                        <Card key={item.id}  imageBackgroundColor={item.imageBackgroundColor} name={item.name} id={item.id} itemAmount={item?.itemAmount} imageUrl={item?.imageUrl} />
                    // </div>
                ))}
            </div>
            <Table/>
        </div>
    );
};

export default ViewAllUser;