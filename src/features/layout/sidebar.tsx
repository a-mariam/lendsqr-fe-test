import React from 'react';
import styles from './index.module.css'
import { FaUsers, FaMoneyCheckAlt, FaCogs, FaList, FaWallet, FaBuilding, FaChartBar, FaLock, FaFileAlt } from 'react-icons/fa';
import {
    MdPeopleAlt, MdOutlineSavings, MdOutlineReportGmailerrorred,
    MdBusiness, MdRequestPage, MdLockOutline, MdSettings,
} from 'react-icons/md';


import {workSans} from "@/app/fonts";

const Sidebar = () => {

    interface SidebarItemProps {
        icon: React.ReactNode;
        label: string;
        active?: boolean;
    }

    const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false }) => {
        return (
            <li>
                <a
                    href="#"
                    className={`flex items-center px-8  gap-3  py-2  hover:border-l-3 hover:border-l-[#39CDCC] hover:bg-[#f3fcfc] transition ${
                        active ? 'bg-[#f3fcfc] text-[#213F7D]  border-l-3 border-l-[#39CDCC] bg-[#f3fcfc] font-semibold' : 'text-[#7a8cb1]'
                    }`}
                >
                    <span  className="text-base">{icon}</span>
                    <p id={'label'+ label} data-testid={'label'+ label} className={` ${workSans.className} text-[16px] `}>{label}</p>
                </a>
            </li>
        );
    };

    return (
        <aside
            className={` ${styles.topBar} md:grid grid w-[16vw]  md:w-[20vw] b max-h-[87vh] overflow-y-scroll  bg-white -md `}
            // className={`hidden md:grid  md:bg-meedlWhite md:content-between md:w-[16vw]  md:px-4  md:py-6 md:border-r md:border-r-[blue300] md:z-0 md:h-[100%]`}

        >
            <div className="">
                <div className="mb-6">
                    <button className="text-blue-700 font-bold text-lg mb-4">Switch Organization</button>
                </div>

                <nav className="space-y-6 overflow-y-auto h-[calc(100vh-100px)]">
                    <div>
                        <h2 className="text-gray-500 text-xs px-8  uppercase font-semibold mb-2">Customers</h2>
                        <ul className="space-y-1">
                            <SidebarItem icon={<MdPeopleAlt />} label="Users" active />
                            <SidebarItem icon={<FaUsers />} label="Guarantors" />
                            <SidebarItem icon={<FaWallet />} label="Loans" />
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-gray-500 text-xs uppercase font-semibold mb-2">Decision Models</h2>
                        <ul className="space-y-1">
                            <SidebarItem icon={<FaChartBar />} label="Savings" />
                            <SidebarItem icon={<FaList />} label="Loan Requests" />
                            <SidebarItem icon={<FaList />} label="Whitelist" />
                            <SidebarItem icon={<FaCogs />} label="Karma" />
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-gray-500 text-xs uppercase font-semibold mb-2">Businesses</h2>
                        <ul className="space-y-1">
                            <SidebarItem icon={<FaBuilding />} label="Organization" />
                            <SidebarItem icon={<FaMoneyCheckAlt />} label="Loan Products" />
                            <SidebarItem icon={<FaWallet />} label="Savings Products" />
                            <SidebarItem icon={<FaList />} label="Fees and Charges" />
                            <SidebarItem icon={<FaList />} label="Transactions" />
                            <SidebarItem icon={<FaCogs />} label="Services" />
                            <SidebarItem icon={<FaLock />} label="Service Account" />
                            <SidebarItem icon={<FaMoneyCheckAlt />} label="Settlements" />
                            <SidebarItem icon={<FaChartBar />} label="Reports" />
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-gray-500 text-xs uppercase font-semibold mb-2">Settings</h2>
                        <ul className="space-y-1">
                            <SidebarItem icon={<FaCogs />} label="Preferences" />
                            <SidebarItem icon={<FaMoneyCheckAlt />} label="Fees and Pricing" />
                            <SidebarItem icon={<FaFileAlt />} label="Audit Logs" />
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;