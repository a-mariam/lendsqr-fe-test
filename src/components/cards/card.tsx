import React from 'react';
import styles from "@/features/index.module.css"
import {workSans500, workSans600} from "@/app/fonts";

export interface CardProps {
    name: string;
    id: string;
    icon: React.ReactNode;
    itemAmount: number;
}

const Card = ({name, id, icon,itemAmount}:CardProps) => {
    return (
        <div
            id={id}
            data-testid={id}
            className={`${styles.cardDropShadow} grid gap-2  py-4 px-3  md:w-fit md:h-[13rem] md:h-fit lg:w-full lg:h-fit `}
        >
            <p>{icon}</p>
            <p className={` ${workSans500.className} text-[#545F7D]  text-[14px] `}>{name}</p>
            <p className={`${workSans600.className} text-[24px]  text-[#213F7D] `}>{itemAmount}</p>

        </div>
    );
};

export default Card;