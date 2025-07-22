"use client"
import React, { ElementType } from 'react'
import {cabinetGroteskRegular} from "@/app/fonts";

type Props = {
    name?:string,
    icon?: ElementType | React.ReactNode,
    className?:string ,
    // optionalFilterName?:string,
    // condition?: boolean,
    isSearch?: boolean,
    // notification?: boolean
    // message?: string
    descriptionId?: string

}

function TableEmptyState({name, icon: Icon, className, isSearch, descriptionId}: Props) {


    return (
        <div className={`flex justify-center items-center min-h-[60vh] w-full ${className}`}>
            <div className="grid gap-1 justify-items-center text-center">
                <div className="flex justify-center text-center">
                    {Icon && (
                        <div
                            id="emptyStateIconId"
                            data-testid="icon-container"
                            style={{backgroundColor: '#cbfcfc'}}
                            className=" w-24 h-24 flex justify-center items-center rounded-full mb-5"
                        >
                            {typeof Icon === 'function' ? (
                                <Icon style={{ fontSize: '2.5rem', color: '#142854' }} />
                            ) : (
                                Icon
                            )}
                        </div>
                    )}

                </div>
                {isSearch ? (
                    <div className="flex gap-1 justify-center text-center">
                        {name}
                        <p>not found</p>
                    </div>
                ) : (
                    <div>
                        <span id={ descriptionId ? descriptionId :`loanEmptyStateTitle`} data-testid={descriptionId ? descriptionId :'loanEmptyStateTitle'} className={` ${cabinetGroteskRegular.className} mr-auto ml-auto  text-black500 `}>{""}</span>
                        <h1 id="titleId" className="font-normal mb-2">
                            <span className="normal-case">{name ? name.charAt(0).toUpperCase() + name.slice(1) + 's' : ''}</span>{' '}
                            Users not found
                        </h1>

                    </div>
                )}
            </div>
        </div>
    );
}

export default TableEmptyState