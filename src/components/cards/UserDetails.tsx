'use client'
import React from 'react';
import { workSans, workSans500} from "@/app/fonts";
import styles from '@/features/index.module.css'
import { UserRound } from 'lucide-react';
import InfoCard from '@/components/cards/InfoCard'

const UserDetails = () => {

    const [currentDetailTab, setCurrentDetailTab] = React.useState('General Details')

    const detailsTabContent = [
        {name: 'General Details', id: 1, value:'GeneralDetails'},
        {name: 'Documents', id: 2,value:'Documents'},
        {name: 'Bank Details', id: 3,value:'BankDetails'},
        {name: 'Loans', id: 4,value:'Loans'},
        {name: 'Savings', id: 5,value:'Savings'},
        {name: 'App and Systems', id: 6,value:'AppAndSystems'}

    ]
    const socials = [
        {name: 'TWITTER',  value:'@grace_effiom'},
        {name: 'FACEBOOK',  value:'Grace jack'},
        {name: 'INSTAGRAM',  value:'grace@gmail.com'},

    ]
    const Guarantor = [
        {name: 'FULL NAME',  value:'Grace james'},
        {name: 'PHONE NUMBER',  value:'0903484848'},
        {name: 'EMAIL ADDRESS',  value:'grace@gmail.com'},
        {name: 'RELATIONSHIP',  value:'Sister'},

    ]
    const Guarantor2 = [
        {name: 'FULL NAME',  value:'praise james'},
        {name: 'PHONE NUMBER',  value:'0903484848'},
        {name: 'EMAIL ADDRESS',  value:'grace@gmail.com'},
        {name: 'RELATIONSHIP',  value:'Sister'},

    ]
    const personalInfoTabContent = [
        {name: 'FULL NAME',  value:'Grace Effiom'},
        {name: 'PHONE NUMBER',  value:'0903484848'},
        {name: 'EMAIL ADDRESS',  value:'grace@gmail.com'},
        {name: 'BVN',  value:'0129292929'},
        {name: 'GENDER',  value:'female'},
        {name: 'MARITAL STATUS',  value:'single'},
        {name: 'CHILDREN',  value:'none'},
        {name: 'TYPE OF RESIDENCE',  value:'abuja'},
    ]
    const educationAndEmployment = [
        {name: 'LEVEL OF EDUCATION',  value:'B.Sc'},
        {name: 'EMPLOYMENT STATUS',  value:'Employed'},
        {name: 'SECTOR OF EMPLOYMENT',  value:'FinTech'},
        {name: 'DURATION OF EMPLOYMENT',  value:'2 years'},
        {name: 'OFFICIAL EMAIL',  value:'grace@learnsqr'},
        {name: 'MONTHLY INCOME',  value:'₦200,000.00- ₦400,000.00'},
        {name: 'LOAN REPAYMENT',  value:'40,000'},
    ]



    return (
        <div className={` w-full grid  gap-4`}>
            <div
                id={'userDetailsHeader'}
                data-test={'userDetailsHeader'}
                className={`md:w-full lg:w-full  0 max-w-[100%] h-fit grid gap-6  px-6 pt-6 ${styles.userDetailsHeader}  bg-white  `}>

                <div className={` flex gap-5    `}>
                    <div className={`w-[7rem] h-[7rem] content-center grid  rounded-full bg-[#dbe0ea] `}>
                        <UserRound className={` mr-auto ml-auto h-8 w-8   text-[#213F7D] `} />
                    </div>
                    <div className={` md:flex  flex sp2  py-3 `}>
                        <div className={` h-full  grid  pr-10 border-r border-[#dddfe5] `}>
                            <div className={` self-center h-fit `}>
                                <p id={'userFullName'} data-testid={'userFullName'} className={`${workSans500.className} self-center flex break-keep    text-[#213F7D] text-[15px] md:text-[22px] `}>Grace Effiom</p>
                                <p id={'userId'} data-testid={'userId'} className={` ${workSans.className} self-center text-[#545F7D] text-[14px]  `}>LSQFf587g90</p>
                            </div>
                        </div>
                        <div className={` h-full  grid  border-r border-[#dddfe5] `}>
                            <div className={` self-center px-6  h-fit `}>
                                <p id={'userTier'} data-testid={'userTier'} className={`${workSans500.className} self-center  text-[#213F7D] text-[14px] `}>User&apos;s Tier</p>
                                <p id={'userId'} data-testid={'userId'} className={` ${workSans.className} self-center text-[#545F7D] text-[14px]  `}>LSQFf587g90</p>
                            </div>
                        </div>
                        <div className={` h-full  grid  pr-4  `}>
                            <div className={` self-center px-6  h-fit `}>
                                <p id={'userBalance'} data-testid={'userBalance'} className={`${workSans500.className} self-center  flex break-keep    text-[#213F7D] text-[15px] md:text-[22px] `}>₦200,000.00</p>
                                <p id={'userBankId'} data-testid={'userBankId'} className={` ${workSans.className} self-center text-[#545F7D] text-[14px]  `}>9912345678/Providus Bank</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex max-w-full  ${styles.overflowVerticallyWithoutBg}  break-keep md:space-x-6 w-full `}>
                    {detailsTabContent?.map((item) => (
                        <button
                            onClick={() => {setCurrentDetailTab(item?.name)}}
                            key={item?.name}
                            className={` ${workSans.className} break-keep  text-[15px] 
                            ${currentDetailTab === item?.name 
                                ? `text-[#39CDCC] flex justify-center w-full   border-b-2 border-[#39CDCC] ` 
                                : `text-black border-none w-full `
                            }  h-fit py-2 `}>{item?.name}</button>
                    ))}
                </div>
            </div>
            { currentDetailTab === 'General Details' &&
                <div className={` w-full gap-4  h-full px-4 py-6  grid  ${styles.dropShaw}  bg-white `}>
                    <InfoCard title={'Personal Info'} showBorder={true} infos={personalInfoTabContent}/>
                    <InfoCard title={'Education and Employment'} showBorder={true} infos={educationAndEmployment}/>
                    <InfoCard title={'Socials'} showBorder={true} infos={socials}/>
                    <InfoCard title={'Guarantors'} showBorder={true} infos={Guarantor}/>
                    <InfoCard title={''} showBorder={false} infos={Guarantor2}/>
                </div>
            }
        </div>
    );
};

export default UserDetails;