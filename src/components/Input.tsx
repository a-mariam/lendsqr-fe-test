'use client';

import React, { useState, InputHTMLAttributes } from 'react';
import {AvenirNext600, inter} from "@/app/fonts";
import {Input} from "@/components/ui/input";

interface ReusableInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    endAdornment?: React.ReactNode | string;
    errorMessage?: string;
    width?:string;
    height?:string;

}

const AuthInputField: React.FC<ReusableInputProps> = ({label,height,width, id, endAdornment, type, errorMessage, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const renderEndAdornment = () => {
        if (typeof endAdornment === 'string') {
            return (
                <button id={`end-adornment-${id}`}
                      className={`text-[#39CDCC] ${AvenirNext600.className} cursor-pointer flex justify-center items-center mr-3.5 text-[12px] font-normal leading-[22px] select-none`}
                      onClick={handleToggleVisibility}>
                    {isPasswordVisible ? 'HIDE' : 'SHOW'}
                </button>
            );
        }
    };

    return (
        <div id={`custom-input-field-${id}`} className={`${inter.className} grid gap-1`}>
            <div id={`input-container-${id}`}
                 className={`flex items-center ${height}  ${width ? width : `w-full`} gap-2 rounded-sm border-2 border-[#545F7D26]  `}>
                <Input
                    id={id}
                    placeholder={label}
                    type={isPasswordVisible ? 'text' : type}
                    className={`${inter.className} focus-visible:ring-0  w-full h-full border-0 text-[#cdd1da] text-[12px] bg-white placeholder:text-[14px] placeholder:text-[#cdd1da] data-[placeholder]:bg-[#cdd1da] data-[placeholder]:text-[8px] focus:outline-none`}
                    {...props}
                />
                {renderEndAdornment()}
            </div>
            {errorMessage && <div className={'flex px-4 items-center'}><p id={`error-message-${id}`} className="text-error600 text-[14px] font-normal">{errorMessage}</p>
            </div>}
        </div>
    );
};

export default AuthInputField;