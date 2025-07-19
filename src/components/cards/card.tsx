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
    itemAmount: number;
}

const Card = ({name, id, imageUrl,imageBackgroundColor,itemAmount}:CardProps) => {
    return (
        <div
            id={id}
            data-testid={id}
            className={`${styles.cardDropShadow} grid gap-2  py-4 px-3  w-[15rem] h-[10rem] md:h-[17rem] md:w-[10rem] lg:w-full lg:h-fit `}
        >
            <div
                style={{backgroundColor: imageBackgroundColor}}
                className={` w-fit h-fit px-4 py-4 rounded-full bg-[${imageBackgroundColor}] md:bg-[${imageBackgroundColor}] `}>
                <Image
                    src={imageUrl}
                    alt={name}
                    width={20}
                    height={20}
                />
            </div>
            <p className={` ${workSans500.className} text-[#545F7D]  text-[14px] `}>{name}</p>
            <p className={`${workSans600.className} text-[24px]  text-[#213F7D] `}>{formateDigits(itemAmount)}</p>

        </div>
    );
};

export default Card;