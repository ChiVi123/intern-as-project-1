import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout() {
    return (
        <Layout className='min-h-full'>
            <Layout.Header className='custom-header'>
                <Header />
            </Layout.Header>

            <Layout>
                <Sidebar />
                <Layout>
                    <div className='flex-1 bg-theme p-4'>
                        <Outlet />
                    </div>
                    <Layout.Footer>
                        <Footer />
                    </Layout.Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}
export default DefaultLayout;
