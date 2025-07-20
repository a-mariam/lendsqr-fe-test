'use client'
import React from 'react';
import {RobotoMono, workSans, workSans500} from "@/app/fonts";
import styles from '@/features/index.module.css'
const UserDetailsHeader = () => {

    const [currentDetailTab, setCurrentDetailTab] = React.useState('General Details')

    const detailsTabContent = [
        {name: 'General Details', id: 1, value:'GeneralDetails'},
        {name: 'Documents', id: 2,value:'Documents'},
        {name: 'Bank Details', id: 3,value:'BankDetails'},
        {name: 'Loans', id: 4,value:'Loans'},
        {name: 'Savings', id: 5,value:'Savings'},
        {name: 'App and Systems', id: 6,value:'AppAndSystems'}

    ]

    return (
        <div
            id={'userDetailsHeader'}
            data-test={'userDetailsHeader'}
            className={`w-full h-full grid gap-6  px-6 pt-6 ${styles.dropShaw}  bg-white  `}>

            <div className={` flex gap-5  `}>
                <div className={`w-[7rem] h-[7rem] rounded-full bg-[#dbe0ea] `}>

                </div>
                <div className={` h-full  grid  pr-4 border-r border-[#545F7D] `}>
                    <div className={` self-center h-fit `}>
                        <p className={`${workSans500.className} self-center  text-[#213F7D] text-[22px] `}>Grace Effiom</p>
                        <p className={` ${workSans.className} self-center text-[#545F7D] text-[14px]  `}>LSQFf587g90</p>
                    </div>
                </div>
                <div className={` h-full  grid  pr-4 border-r border-[#545F7D] `}>
                    <div className={` self-center h-fit `}>
                        <p className={`${workSans500.className} self-center  text-[#213F7D] text-[22px] `}>User's Tier</p>
                        <p className={` ${workSans.className} self-center text-[#545F7D] text-[14px]  `}>LSQFf587g90</p>
                    </div>
                </div>
                <div className={` h-full  grid  pr-4 border-r border-[#545F7D] `}>
                    <div className={` self-center h-fit `}>
                        <p className={`${workSans500.className} self-center  text-[#213F7D] text-[22px] `}>₦200,000.00</p>
                        <p className={` ${workSans.className} self-center text-[#545F7D] text-[14px]  `}>9912345678/Providus Bank</p>
                    </div>
                </div>
            </div>

            <div className={`flex space-x-6 w-full `}>
                {detailsTabContent?.map((item, index) => (
                    <span
                        onClick={() => {setCurrentDetailTab(item?.name)}}
                        key={item?.name} className={` ${workSans.className} text-[15px] ${currentDetailTab === item?.name ? `text-[#39CDCC] flex justify-center w-full   border-b border-[#39CDCC] ` : `text-black border-none w-full `}  h-fit py-2 `}>{item?.name}</span>
                ))}
            </div>

            
        </div>
    );
};

export default UserDetailsHeader;