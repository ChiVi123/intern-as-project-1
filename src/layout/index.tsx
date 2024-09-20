import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function DefaultLayout() {
    return (
        <Layout className='min-h-full'>
            <Layout.Sider>
                <Navbar />
            </Layout.Sider>
            <Layout>
                <div className='flex-1'>
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
