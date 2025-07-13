import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {inter} from "@/app/fonts";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons"

const Topbar = () => {
    return (
        <div className={` w-screen bg-white sticky grid grid-cols-2 top-0 h-[13vh] shadow-md `}>
            <div className={`w-[50vw] bg-pink-400 pl-10 h-fit self-center flex justify-between `}>
                <div className={`  `}>
                    <Image
                        src={`/Group.svg`}
                        width={210}
                        height={160}
                        loading="lazy"
                        alt={`Logo`}
                        className={`w-full h-full`}
                    />
                </div>

                <div id={`input-container-`}
                     className={`flex items-center w-[50%] bg-white h-fit py-4 gap-2 rounded-sm border-2 border-[#545F7D26]  `}>
                    <Input
                        id={'inputField'}
                        placeholder={'Search for anything'}
                        // type={isPasswordVisible ? 'text' : type}
                        className={`${inter.className} focus-visible:ring-0  r h-full w-full border-0 text-[#cdd1da] text-[12px] bg-white placeholder:text-[14px] placeholder:text-[#cdd1da] data-[placeholder]:bg-[#cdd1da] data-[placeholder]:text-[8px] focus:outline-none`}

                    />
                    <div className={` bg-[]`}>
                        <MagnifyingGlassIcon/>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Topbar;