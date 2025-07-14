import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {inter, Roboto400,workSans} from "@/app/fonts";
import {MagnifyingGlassIcon,BellIcon} from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdArrowDropDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import styles from './index.module.css'
const Topbar = () => {
    // box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    // box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    return (
        <div className={` w-screen bg-white px-3 md:px-0 lg:px-0 sticky grid grid-cols-2 top-0 h-[10vh] md:h-[13vh] lg:h-[13vh] ${styles.topBar}`}>
            <div className={`w-[52vw]  lg:flex lg:justify-between  md:flex md:justify-between  md:pl-6 lg:pl-6  h-fit self-center flex justify-between `}>
                <IoMdMenu className={`md:hidden lg:hidden flex`} color='#213F7D' style={{ height: '1.5rem', width: '1.5rem' }}
                          // onClick={openMobileSideBar}
                />
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
                <div className=" w-[55%] sm:hidden  md:flex lg:flex hidden  ">
                    <div className="relative w-full justify-end ">
                        <input
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
            </div>
            <div className={`  self-center h-fit md:pr-20 flex justify-end w-full`}>
                <div className={` flex gap-8`}>
                    <p className={`md:flex lg:flex hidden ${Roboto400.className} underline text-[16px] text-[#213F7D] mt-auto mb-auto  `}>Docs</p>
                    <BellIcon data-testid={'notificationIcon'} id={'notificationIcon'} className={` mt-auto mb-auto h-6 w-6 text-[#213F7D]  `}/>
                    <div className={`flex gap-2`}>
                        <Avatar className={`w-12 h-12`}>
                            <AvatarImage  src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className={`md:flex lg:flex hidden gap-2 `}>
                            <p id={'userName'} data-testid={'userName'} className={`mt-auto mb-auto ${workSans.className} text-[16px]  text-[#213F7D] `}>Adedeji</p>
                            <MdArrowDropDown className={` text-[#213F7D] h-4 w-4  mt-auto mb-auto`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Topbar;