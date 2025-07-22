import React from 'react';
import styles from "@/features/index.module.css"
import {workSans500, workSans600} from "@/app/fonts";
import Image from 'next/image';
import {formateDigits} from "@/util/Format";

export interface CardProps {
    name: string;
    id: string;
    imageUrl: string;
    imageBackgroundColor: string;
    itemAmount: string ;
}

const Card = ({name, id, imageUrl,imageBackgroundColor,itemAmount}:CardProps) => {
    return (
        <div
            id={id}
            data-testid={id}
            className={`${styles.headerCardDropShadow} grid gap-2   py-4 px-3  w-fit  pl-4 md:pl-0 pr-40 md:pr-0 h-[12rem] md:h-[17rem] md:w-[10rem] lg:w-full lg:h-fit `}
        >
            <div
                style={{backgroundColor: imageBackgroundColor}}
                className={` w-fit h-fit px-4 py-4 rounded-full  `}>
                <Image
                    src={imageUrl}
                    alt={name}
                    width={20}
                    height={20}
                />
            </div>
            <span className={` ${workSans500.className} flex  break-keep w-full  text-[#545F7D]  text-[14px] `}>{name}</span>
            <p className={`${workSans600.className} text-[24px] flex   text-[#213F7D] `}>{formateDigits(Number(itemAmount))}</p>

        </div>
    );
};

export default Card;