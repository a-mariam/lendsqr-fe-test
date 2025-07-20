import React from 'react';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import {workSans, workSans500, workSans600} from "@/app/fonts";
import { Button } from '@/components/ui/button';
import UserDetails from "@/components/cards/UserDetails";

const ViewUsersDetails = () => {
    return (
        <div className={`md:px-8 grid gap-4  md:py-8 lg:px-8 lg:py-8 py-3 px-6 `}>
           <div className={` grid h-fit  gap-6`}>
               <button
                   id={'backToViewAllUser'}
                   data-testid={'backToViewAllUser'}
                   className={` ${workSans.className} h-fit text-[#545F7D] text-[16px] flex gap-2 `}>
                   <HiOutlineArrowLongLeft className={` text-[#545F7D] mt-auto mb-auto h-6 w-6 `} />
                   Back to users
               </button>
               <div className={`  grid gap-2 md:gap-0  md:flex w-full md:justify-between `}>
                   <p className={` ${workSans500.className} text-[#213F7D] text-[20px] `}>User details</p>
                   <div className={`md:flex grid w-full  gap-4`}>
                       <Button id={'blackListUserButton'} data-testid={'blackListUserButton'} className={` ${workSans600.className} bg-white hover:bg-white w-full md:w-fit lg:w-fit  text-[14px] rounded-md  text-[#E4033B] border border-[#E4033B] `}>BLACKLIST USER</Button>
                       <Button id={'activateUserButton'} data-testid={'activateUserButton'} className={` ${workSans600.className} bg-white hover:bg-white w-full md:w-fit lg:w-fit   text-[14px] rounded-md text-[#39CDCC] border border-[#39CDCC] `}>ACTIVATE USER</Button>
                   </div>
               </div>
               <div>
                   <UserDetails/>
               </div>
           </div>

        </div>
    );
};

export default ViewUsersDetails;