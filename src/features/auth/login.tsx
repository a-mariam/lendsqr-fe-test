'use client'
import React from 'react';
import Image from 'next/image';
import {AvenirNext600,AvenirNext700} from "@/app/fonts";
import AuthInputField from "@/components/Input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const Login = () => {

    const router = useRouter();
    const handleClick = () => {
        router.push("/users");
    }
    return (
        <div className={` w-screen h-screen  grid md:grid-cols-2`}>
            {/*bg-[#fefefe]*/}
            <div className={` w-full hidden md:grid lg:grid md:pl-6 h-full  bg-[#fdfdfd] `}>

                <div className={`w-[80%]  mt-26 mr-auto ml-auto `}>
                    <Image
                        src={`/Group.svg`}
                        width={180}
                        height={140}
                        loading="lazy"
                        alt={`Logo`}
                    />
                </div>
               <div className={` w-[85%] mr-auto mb-6 ml-auto `}>
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
            <div className={` w-[100%] h-full bg-[#ffffff] grid  md:pl-28 px-6   `}>
                <div className={`w-[100%] md:place-self-center pt-10 h-fit grid gap-14   `}>
                    <div className={` w-fit h-fit  `}>
                        <p id={'welcomeText'} data-testid={'welcomeText'} className={`${AvenirNext700.className} mb-2 leading-tight text-[#213F7D] text-[40px]`}>Welcome!</p>
                        <p className={`text-[16px]  mr-auto ml-auto text-[#545F7D] `}>Enter details to login.</p>
                    </div>
                    <form
                        id={'loginForm'}
                        data-testid={'loginForm'}
                        className={`w-full h-fit  grid gap-5 `}>
                        <div className={` h-fit grid gap-5`}>
                            <AuthInputField height={'h-[3rem]'} width={'w-[80%] '} label={'Email'} id={'userEmailInput'}/>
                            <AuthInputField height={'h-[3rem]'} endAdornment={''} width={'w-[80%] '} label={'Password'} id={'userPasswordInput'}/>
                        </div>
                        <p className={`text-[#39CDCC] ${AvenirNext600.className} text-[12px] mt-2 tracking-wide mb-2 `}>FORGOT PASSWORD?</p>
                        <Button onClick={handleClick} className={`bg-[#39CDCC] hover:bg-[#39CDCC] w-[80%] h-fit py-3  text-white`}>LOG IN</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;