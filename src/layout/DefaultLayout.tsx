import { FloatButton, Layout } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MessengerIcon, PhoneIcon } from '~icons';

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
                    <Layout.Content className='custom-content'>
                        <Suspense fallback={<>loading...</>}>
                            <Outlet />
                        </Suspense>
                    </Layout.Content>
                    <Layout.Footer className='custom-footer'>
                        <Footer />
                    </Layout.Footer>
                </Layout>
            </Layout>

            <FloatButton icon={<MessengerIcon />} className='custom-float-button' />
            <FloatButton icon={<PhoneIcon />} className='custom-float-button' />
        </Layout>
    );
}
export default DefaultLayout;
