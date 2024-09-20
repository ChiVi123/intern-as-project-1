import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';

import browserRouter from '~routers';

function App() {
    return (
        <ConfigProvider
            button={{ className: 'custom-btn' }}
            theme={{
                token: {
                    colorPrimary: '#259E58',
                    colorPrimaryActive: '#005F33',
                    colorPrimaryHover: '#1C7742',
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
