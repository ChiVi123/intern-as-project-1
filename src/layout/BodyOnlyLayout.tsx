import { Layout } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function BodyOnlyLayout() {
    return (
        <Layout.Content className='min-h-full custom-content'>
            <Suspense fallback={<>loading...</>}>
                <Outlet />
            </Suspense>
        </Layout.Content>
    );
}
export default BodyOnlyLayout;
