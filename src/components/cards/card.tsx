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
            className={`${styles.cardStyles} grid g gap-4 shrink-0  py-4 pl-4   `}
        >

            <div className={` w-full h-fit `}>
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
                <span className={` ${workSans500.className} flex  mt-2 break-keep w-full  text-[#545F7D]  text-[14px] `}>{name}</span>
                <p className={`${workSans600.className} text-[24px] flex   text-[#213F7D] `}>{formateDigits(Number(itemAmount))}</p>

            </div>
        </div>
    );
};

export default Card;