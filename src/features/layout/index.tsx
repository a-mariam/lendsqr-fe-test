import React from 'react';
import Sidebar from "@/features/layout/sidebar";
import Topbar from "@/features/layout/topbar";

const Layout = () => {
    return (
        <div className="h-screen w-screen overflow-x-hidden  bg-[#fbfbfb]">
            {/*<Sidebar/>*/}
            <Topbar/>
            <div>
                <Sidebar/>
                <div className={``}>

                </div>
            </div>

        </div>
    );
};

export default Layout;