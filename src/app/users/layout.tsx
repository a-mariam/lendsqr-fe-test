import React from 'react';
import Layout from "@/features/layout/index"
interface Props {
    children: React.ReactNode;
}

const index = ({children}: Props) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default index;