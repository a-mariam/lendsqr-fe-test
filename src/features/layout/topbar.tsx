import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {inter} from "@/app/fonts";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons"

const Topbar = () => {
    return (
        <div className={` w-screen bg-white sticky grid grid-cols-2 top-0 h-[13vh] shadow-md `}>
            <div className={`w-[50vw]  pl-6 h-fit self-center flex justify-between `}>
                <div className={`  `}>
                    <Image
                        src={`/Group.svg`}
                        width={100}
                        height={160}
                        loading="lazy"
                        alt={`Logo`}
                        className={`w-[90%] h-full`}
                    />
                </div>

                <div id={`input-container-`}
                     // dir="ltr"
                     className={`flex items-center w-[58%]  h-  gap-0 rounded-sm border-1 border-[#545F7D26]  `}>
                    <Input
                        id={'inputField'}
                        placeholder={'Search for anything'}
                        // type={isPasswordVisible ? 'text' : type}
                        className={`${inter.className} focus-visible:ring-0 bg-white  h- w-full border-0 text-[#cdd1da] text-[12px]  placeholder:text-[14px] placeholder:text-[#cdd1da] `}

                    />
                    <div className={` bg-[#39CDCC] h-[100%] rounded-r-sm grid w-fit px-5 `}>
                        <MagnifyingGlassIcon className={`h-4 self-center w-4`} color={'white'}/>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Topbar;