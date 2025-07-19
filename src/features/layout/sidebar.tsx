'use client'
import React from 'react';
import styles from './index.module.css'
import {store, useAppSelector} from '@/redux/store'
import { FaUsers,
    FaPiggyBank,FaUserCheck,FaBriefcase,
} from 'react-icons/fa';
import {
    MdPeopleAlt
} from 'react-icons/md';
import {workSans} from "@/app/fonts";
import {setShowMobileSidebar, setCurrentTab} from "@/redux/slice/layoutSlice";
import Image from "next/image";
import Moneybag from "@/components/icons/moneybag";
import { FaRegHandshake, FaUserXmark } from "react-icons/fa6";
import ReceiveMoney from "@/components/icons/ReceiveMoney";
import { FaHouseChimney } from "react-icons/fa6";


const Sidebar = () => {

    const showMobileSidebar = useAppSelector(state => state.layout.showMobileSidebar);
    const currentSideBarItem = useAppSelector(state => state.layout.currentTab);

    interface SidebarItemProps {
        icon: React.ReactNode;
        label: string;
        active?: boolean;
        onClick?:boolean;
    }

    const closeMobileSidebar = () => {
        store.dispatch(setShowMobileSidebar(false))
    }
    const onClickMobileSidebarItem = (label: string) => {
        store.dispatch(setCurrentTab(label))
    }

    const getSidebarIcon = (IconComponent: React.ElementType, activeLabel: string, current: string) => (
        <IconComponent className={`text-lg ${activeLabel === current ? "text-[#213F7D]" : "text-[#7a8cb1]"}`} />
    );
    const  customerItems = [
        {label: `Users`, icon: getSidebarIcon(MdPeopleAlt, "Users", currentSideBarItem),active:true , onClick:true},
        {label: `Guarantors`, icon: getSidebarIcon(FaUsers, "Guarantors", currentSideBarItem),active:true , onClick:true},
        {label: `Loans`, icon: <Moneybag color={currentSideBarItem ==  'Loans'? '#213F7D' : ''}/>,active:true , onClick:true},
        {label: `Decision models`, icon: getSidebarIcon(FaRegHandshake, 'Decision models',currentSideBarItem),active:true , onClick:true},
        {label: `Savings`, icon: getSidebarIcon(FaPiggyBank, 'Savings',currentSideBarItem),active:true , onClick:false},
        {label: `Loan requests`, icon: <ReceiveMoney color={currentSideBarItem ==  'Loan requests'? '#213F7D' : ''}/>,active:true , onClick:true},
        {label: `Whitelist`, icon: getSidebarIcon(FaUserCheck, 'Whitelist',currentSideBarItem),active:true , onClick:true},
        {label: `Karma`, icon: getSidebarIcon(FaUserXmark, 'Karma',currentSideBarItem),active:true , onClick:false},
    ]


    const  businessItems = [
        {label: `Organization`, icon: getSidebarIcon(FaBriefcase, 'Organization', currentSideBarItem),active:true , onClick:true},
        {label: `Loan Products`, icon: getSidebarIcon(FaPiggyBank, 'Loan Products', currentSideBarItem),active:true , onClick:false},
        {label: `Savings Product`, icon:getSidebarIcon(FaPiggyBank, 'Savings Product', currentSideBarItem),active:true , onClick:true},
        {label: `Fees and Charge`, icon:getSidebarIcon(FaPiggyBank, 'Fees and Charge', currentSideBarItem),active:true , onClick:true},
        {label: `Transactions`, icon:getSidebarIcon(FaUserXmark, 'Transactions', currentSideBarItem) ,active:true , onClick:false},
        {label: `Service Account`, icon: getSidebarIcon(FaUserXmark, 'Service Account', currentSideBarItem),active:true , onClick:true},
        {label: `Settlements`, icon: getSidebarIcon(FaUserXmark, 'Settlements', currentSideBarItem),active:true , onClick:false},
        {label: `Reports`, icon:getSidebarIcon(FaUserXmark, 'Reports', currentSideBarItem),active:true , onClick:true},
    ]
    const settingsItems = [
        {label: `Preferences`, icon: getSidebarIcon(FaUserXmark, 'Preferences', currentSideBarItem),active:true , onClick:true},
        {label: `Fees and Pricing`, icon:getSidebarIcon(FaUserXmark, 'Fees and Pricing', currentSideBarItem),active:true , onClick:false},
        {label: `Audit Logs`, icon: getSidebarIcon(FaUserXmark, 'Audit Logs', currentSideBarItem),active:true , onClick:true},
    ]


    const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false, onClick }) => {
        return (
            <div
                onClick={()=> {onClickMobileSidebarItem(onClick ? label : '')}}
            >
                <div
                    className={`flex items-center px-8  gap-3  py-2  hover:border-l-3 hover:border-l-[#39CDCC] hover:bg-[#f3fcfc] transition ${
                        active || currentSideBarItem === label ? 'bg-[#f3fcfc] text-[#213F7D]  border-l-3 border-l-[#39CDCC] bg-[#f3fcfc] font-semibold' : 'text-[#7a8cb1]'
                    }`}
                >
                    <div  className="text-base">{icon}</div>
                    <p id={'label'+ label} data-testid={'label'+ label} className={` ${workSans.className} text-[16px] `}>{label}</p>
                </div>
            </div>
        );
    };

    return (
     <div className={` absolute bottom-0 grid md:static   `}>
         {showMobileSidebar && (
             <aside
                 className={` sm:z-40 sm:w-[100vw] sm:overflow-hidden sm:h-[100vh]   sm:border-r-2 border-r-grey-200 z-40 w-[100vw] overflow-hidden h-[100vh] tablet:flex  border-r-2 border-r-grey-200  flex md:hidden`}
             >
                 <div className={` w-full bg-white overflow-y-scroll `}>
                     <div className={` md:hidden py-2 w-[50%] h-[10vh] px-4 sm:grid lg:hidden grid   `}>
                         <Image
                             id={'lendsqrLogo'}
                             data-testid={'lendsqrLogo'}
                             src={`/Group.svg`}
                             width={100}
                             height={100}
                             loading="lazy"
                             alt={`Logo`}
                             className={`w-full h-full`}
                         />
                     </div>
                     <nav className="space-y-6 overflow-y-auto h-[calc(100vh-100px)]">
                         <div>
                             <h2 className="text-gray-500 text-xs px-8  uppercase font-semibold mb-2">Customers</h2>
                             <ul className="space-y-1">
                                 {customerItems?.map((item) => (
                                     <SidebarItem key={'itemKey:'+ item?.label} icon={item?.icon} label={item?.label} onClick={item?.onClick} />
                                 ))}
                             </ul>
                         </div>

                         <div>
                             <h2 className="text-gray-500 text-xs uppercase font-semibold mb-2">Businesses</h2>
                             <ul className="space-y-1">
                                 {businessItems?.map((item) => (
                                     <SidebarItem key={'itemKey:'+ item?.label} icon={item?.icon} label={item?.label} onClick={item?.onClick} />
                                 ))}
                             </ul>
                         </div>

                         <div>
                             <h2 className="text-gray-500 text-xs uppercase font-semibold mb-2">Settings</h2>
                             <ul className="space-y-1">
                                 {settingsItems?.map((item) => (
                                     <SidebarItem key={'itemKey:'+ item?.label} icon={item?.icon} label={item?.label} onClick={item?.onClick} />
                                 ))}
                             </ul>
                         </div>
                     </nav>
                 </div>
                 <button data-testid="blurry" id="sideBarblurBackground"
                         className={` grid md:hidden   h-[100%] w-[40%] z-10 bg-[#344054B2]  `}
                         onClick={closeMobileSidebar}
                 ></button>
             </aside>
         )}
        <aside
            className={` ${styles.mainContainerOverflowStyles} md:grid lg:grid hidden  w-[16vw]  md:w-[20vw] b max-h-[87vh] overflow-hidden  bg-white -md `}
            // className={`hidden md:grid  md:bg-meedlWhite md:content-between md:w-[16vw]  md:px-4  md:py-6 md:border-r md:border-r-[blue300] md:z-0 md:h-[100%]`}

        >
            <div className="">
                <div className="mb-6 px-8 pt-8  flex gap-3  ">
                    <FaBriefcase className={` mt-auto mb-auto text-[#7a8cb1] gap-3  `}/>
                    <button className={` ${workSans.className} text-[16px]  text-[#213F7D] `}>Switch Organization</button>
                </div>
                <div className={` pb-4  `}>
                    <SidebarItem key={'itemKey:Dashboard'} icon={<FaHouseChimney />} label={'Dashboard'} onClick={false} />
                </div>
                <nav className="space-y-6  h-[calc(100vh-100px)]">
                    <div>
                        <h2 className="text-gray-500 text-xs px-8  uppercase font-semibold mb-2">Customers</h2>
                        <ul className="space-y-3">
                            {customerItems?.map((item) => (
                                <SidebarItem key={'itemKey:'+ item?.label} icon={item?.icon} label={item?.label} onClick={item?.onClick} />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-gray-500 px-8  text-xs uppercase font-semibold mb-2">Businesses</h2>
                        <ul className="space-y-3">
                            {businessItems?.map((item) => (
                                <SidebarItem key={'itemKey:'+ item?.label} icon={item?.icon} label={item?.label} onClick={item?.onClick} />
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-gray-500 px-8  text-xs uppercase font-semibold mb-2">Settings</h2>
                        <ul className="space-y-3">
                            {settingsItems?.map((item) => (
                                <SidebarItem key={'itemKey:'+ item?.label} icon={item?.icon} label={item?.label} onClick={item?.onClick} />
                            ))}
                        </ul>
                    </div>
                </nav>

            </div>
        </aside>
     </div>
    );
};

export default Sidebar;