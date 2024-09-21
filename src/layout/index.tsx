import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';

function DefaultLayout() {
    return (
        <Layout className='min-h-full'>
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
    );
}
export default DefaultLayout;
