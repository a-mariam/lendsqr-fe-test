'use client'
import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {inter, Roboto400,workSans500} from "@/app/fonts";
import {MagnifyingGlassIcon,BellIcon} from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdArrowDropDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import styles from './index.module.css'
import {setShowMobileSidebar} from "@/redux/slice/layoutSlice";
import {store, useAppSelector} from '@/redux/store';
const Topbar = () => {


    const currentSidebarItemLabel = useAppSelector(state => state.layout.currentTab)
    const openMobileSidebar = () => {
        store.dispatch(setShowMobileSidebar(true))
    }

    return (
        <div className={` w-screen bg-white px-3 md:px-0 lg:px-0 sticky flex justify-between top-0 h-[10vh] md:h-[13vh] lg:h-[13vh] ${styles.topBarMobile} `}>
            <div className={`w-fit   lg:flex lg:justify-between  md:flex md:justify-between  md:pl-6 lg:pl-6  h-fit self-center flex justify-between `}>
                <div className={`md:hidden lg:hidden flex gap-3 `}>
                    <IoMdMenu className={`md:hidden lg:hidden flex mt-auto mb-auto`} color='#213F7D' style={{ height: '1.5rem', width: '1.5rem' }}
                              onClick={openMobileSidebar}
                    />
                    <p className={`md:hidden lg:hidden flex text-[20px] text-[#213F7D]  mt-auto mb-auto `}>{currentSidebarItemLabel}</p>
                </div>
                <div className={` md:grid sm:hidden lg:grid hidden `}>
                    <Image
                        id={'lendsqrLogo'}
                        data-testid={'lendsqrLogo'}
                        src={`/Group.svg`}
                        width={100}
                        height={160}
                        loading="lazy"
                        alt={`Logo`}
                        className={`w-[90%] h-full`}
                    />
                </div>
            </div>
            <div className={`md:w-[80vw] ${styles.topBar}  lg:w-[80vw]  md:px-8 md:flex md:justify-between md:items-center  order-last   `}>
                <div className=" w-[39%] sm:hidden md:mt-auto md:mb-auto   md:flex lg:flex hidden  ">
                    <div className="relative w-full justify-end ">
                        <Input
                            id={'searchInput'}
                            data-testid={`searchInput`}
                            type="text"
                            placeholder="Search for anything"
                            className={` ${inter.className}  placeholder:text-[14px] placeholder:text-[#cdd1da]  text-[15px] text-[#cdd1da] w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#39CDCC] focus:border-transparent`}
                        />
                        <button className="absolute right-0 top-0 h-full px-5 bg-[#39CDCC] text-white rounded-r-lg hover:bg-[#39CDCC]">
                            <MagnifyingGlassIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className={` h-full  md:h-fit lg:h-fit   mt-auto mb-auto flex items-center  `}>
                    <div className={`   flex gap-8`}>
                        <p className={`md:flex pr-5 lg:flex hidden ${Roboto400.className} underline text-[16px] text-[#213F7D] mt-auto mb-auto  `}>Docs</p>
                        <BellIcon data-testid={'notificationIcon'} id={'notificationIcon'} className={` mt-auto mb-auto h-6 w-6 text-[#213F7D]  `}/>
                        <div className={`flex  gap-2`}>
                            <Avatar className={`w-12 h-12`}>
                                <AvatarImage  src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className={`md:flex  lg:flex hidden gap-2 `}>
                                <p id={'userName'} data-testid={'userName'} className={`mt-auto mb-auto ${workSans500.className} text-[16px]  text-[#213F7D] `}>Adedeji</p>
                                <MdArrowDropDown className={` text-[#213F7D] h-4 w-4  mt-auto mb-auto`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Topbar;