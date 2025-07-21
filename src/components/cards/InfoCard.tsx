import React from 'react';
import {workSans, workSans500} from "@/app/fonts";

interface IProps {
    title?: string;
    infos: {name: string; value: string}[];
    showBorder?: boolean;
}
const InfoCard = ({title, infos, showBorder}:IProps) => {
    return (
        <div id={'tile:'+ title} data-testid={'tile:'+ title} className={`w-full ${showBorder ? `border-b-2  pb-4  border-[#f8f9fb]` : ``} grid gap-8 `}>
            {title && <p className={` text-[#213F7D] md:text-[16px] text-[16px]  `}>{title}</p>}
            <div className={` w-full md:grid grid gap-8  md:grid-cols-5  `}>
                {infos?.map((item, i) => (
                    <div key={'items'+i} className={` grid gap-2 `}>
                        <p id={'infoName:'+ item?.name} data-testid={'infoName:'+ item?.name}  className={` ${workSans.className} text-[#545F7D] text-[16px] md:text-[12px]  `}>{item?.name}</p>
                        <p id={'infoValue:'+ item?.value} data-testid={'infoValue:'+ item?.value}  className={` ${workSans500.className} text-[#545F7D] text-[16px]  `} >{item?.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoCard;