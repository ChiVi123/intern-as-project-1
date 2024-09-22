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
                <Layout.Sider
                    width={257}
                    breakpoint='lg'
                    collapsedWidth={0}
                    collapsible
                    trigger={null}
                    className='custom-sider'
                >
                    <Sidebar />
                </Layout.Sider>

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
