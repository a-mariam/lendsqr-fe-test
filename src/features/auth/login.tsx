import React from 'react';
import Image, {StaticImageData} from 'next/image';
import {Ave} from "@/app/fonts";

const Login = () => {
    return (
        <div className={` w-full h-full bg-blue-600 grid grid-cols-2`}>
            {/*bg-[#fefefe]*/}
            <div className={` w-full pt-25 pl-6 h-full bg-[#fefefe] `}>

                <div className={`w-[80%]  mr-auto ml-auto mb-30`}>
                    <Image
                        src={`/Group.svg`}
                        width={180}
                        height={140}
                        loading="lazy"
                        alt={`Logo`}
                    />
                </div>
               <div className={` w-[85%] mr-auto ml-auto `}>
                   <Image
                       src={`/pablo-sign-in 1.svg`}
                       alt="circle"
                       width={100}
                       height={100}
                       className={` w-full h-fit`}
                       // className="object-right-bottom flex  "
                       // data-testid="circle-image"
                       loading="lazy"
                   />
               </div>
            </div>
            <div className={` w-full h-full pl-10 bg-[#ffffff] grid pt-40 `}>
                <div className={`h-fit ${Ave.className}  `}>
                    <p className={`text-[#213F7D] text-[40px]`}>Welcome!</p>
                </div>

            </div>
        </div>
    );
};

export default Login;