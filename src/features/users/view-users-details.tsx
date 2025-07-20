import React from 'react';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import {workSans, workSans500, workSans600} from "@/app/fonts";
import { Button } from '@/components/ui/button';
import UserDetailsHeader from "@/components/cards/UserDetailsHeader";

const ViewUsersDetails = () => {
    return (
        <div className={`md:px-8 grid gap-4  md:py-8 lg:px-8 lg:py-8 py-3 px-6 `}>
           <div className={``}>
               <button
                   id={'backToViewAllUser'}
                   data-testid={'backToViewAllUser'}
                   className={` ${workSans.className} h-fit text-[#545F7D] text-[16px] flex gap-2 `}>
                   <HiOutlineArrowLongLeft className={` text-[#545F7D] mt-auto mb-auto h-6 w-6 `} />
                   Back to users
               </button>
               <div className={` flex w-full justify-between `}>
                   <p className={` ${workSans500.className} text-[#213F7D] text-[20px] `}>User details</p>
                   <div className={`flex gap-4`}>
                       <Button id={'blackListUserButton'} data-testid={'blackListUserButton'} className={` ${workSans600.className} bg-white text-[14px] rounded-md  text-[#E4033B] border border-[#E4033B] `}>BLACKLIST USER</Button>
                       <Button id={'activateUserButton'} data-testid={'activateUserButton'} className={` ${workSans600.className} bg-white text-[14px] rounded-md text-[#39CDCC] border border-[#39CDCC] `}>ACTIVATE USER</Button>
                   </div>
               </div>
               <div>
                   <UserDetailsHeader/>
               </div>
           </div>

        </div>
    );
};

export default ViewUsersDetails;