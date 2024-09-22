import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

import browserRouter from '~routers';

function App() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: { headerBg: 'var(--green-500)', headerColor: 'var(--white)', siderBg: 'var(--green-500)' },
                },
                token: {
                    colorPrimary: '#259e58',
                    colorPrimaryActive: 'var(--active-menu-color)',
                    colorPrimaryHover: 'var(--green-600)',
                    // Typography
                    colorText: 'var(--gray-500)',
                    fontFamily: 'var(--font-nunito)',
                    lineHeight: 1.5,
                    lineHeightHeading1: 1.06,
                    lineHeightHeading2: 1.06,
                },
            }}
        >
            <RouterProvider router={browserRouter} />
        </ConfigProvider>
    );
}

export default App;
