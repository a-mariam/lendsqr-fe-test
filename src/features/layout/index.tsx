import React from 'react';
import Sidebar from "@/features/layout/sidebar";
import Topbar from "@/features/layout/topbar";
import styles from "./index.module.css"
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div className="h-screen w-screen overflow-x-hidden  bg-[#fbfbfb]">
            {/*<Sidebar/>*/}
            <Topbar/>
            <div className={` flex `}>
                <Sidebar/>
                <div className={`grid w-full ${styles.mainContainerOverflowStyles} h-[90vh] overflow-y-hidden overflow-x-hidden md:h-[87vh] lg:h-[87vh] bg-[#fbfbfb] `}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default Layout;