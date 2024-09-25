import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function LayoutNoFooter() {
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
                        <Outlet />
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default LayoutNoFooter;
