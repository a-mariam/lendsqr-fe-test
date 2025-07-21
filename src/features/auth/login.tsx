'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {AvenirNext600, AvenirNext700, AvenirNext400, inter} from "@/app/fonts";
import AuthInputField from "@/components/Input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const Login = () => {

    const router = useRouter();
    // const [disableButton, setDisableButton] = React.useState(true);
    // const [ setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [validEmail, setValidEmail] = useState(false)
    const validateEmailInput = (input: string ) => {
        const validRegex  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return !!RegExp(validRegex).exec(input);

    }
    const [showEmailMessage, setShowEmailMessage] = useState(false)
    const disableButton = !(validEmail && password.trim().length > 0);

    const handleClick = (e?:React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault()

        router.push("/users");
    }
    const validateEmail = (input: string) => {
        const isValid = validateEmailInput(input);
        if (isValid){
            setValidEmail(true)
            setShowEmailMessage(false)
        }else{
            setValidEmail(false)
            setShowEmailMessage(true)
        }
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        validateEmail(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    };
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
                       loading="lazy"
                   />
               </div>
            </div>
            <div className={` w-[100%] h-full bg-[#ffffff]    grid  md:pl-20 px-6   `}>
                <div className={`w-[100%] md:place-self-center place-self-center pl-10 lg:pt-10  md:pt-10 h-fit grid gap-14   `}>
                    <div className={` w-fit h-fit  `}>
                        <p id={'welcomeText'} data-testid={'welcomeText'} className={`${AvenirNext700.className} mb-2 leading-tight text-[#213F7D] text-[40px]`}>Welcome!</p>
                        <p className={`font-light font-stretch-normal text-[20px]  mr-auto ml-auto text-[#545F7D] `}>Enter details to login.</p>
                    </div>
                    <form
                        id={'loginForm'}
                        data-testid={'loginForm'}
                        className={`w-full h-fit  grid gap-5 `}>
                        <div className={` h-fit grid gap-5`}>
                            <AuthInputField onChange={(e) => {handleEmail(e)}} height={'h-[3rem]'} width={'w-[80%] '} label={'Email'} id={'userEmailInput'}/>
                            {showEmailMessage && (
                                <p className="text-red-500 text-sm">Please enter a valid email address.</p>
                            )}
                            <AuthInputField onChange={(e) => {handlePassword(e)}} height={'h-[3rem]'} endAdornment={''} type={'password'} width={'w-[80%] '} label={'Password'} id={'userPasswordInput'}/>
                        </div>
                        <p className={`text-[#39CDCC] ${AvenirNext600.className} text-[12px] mt-2 tracking-wide mb-2 `}>FORGOT PASSWORD?</p>
                        <Button
                            id={'loginButton'}
                            data-testid={'loginButton'}
                            disabled={disableButton}
                            onClick={ (event) => handleClick(event)}
                            className={` ${disableButton? `bg-[#d0d0d0] hover:bg-[#d0d0d0]` : `bg-[#39CDCC] hover:bg-[#39CDCC]`}  w-[80%] h-fit py-3  text-white`}>LOG IN</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;