import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { useAppDispatch } from '~core/store';
import { fetchAllLocation } from '~modules/location';
import { selectLocationState } from '~modules/location/slice';
import browserRouter from '~routers';

function App() {
    const locationState = useSelector(selectLocationState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async function () {
            if (locationState.status === 'pending') {
                console.log('dispatch fetchAllLocation');

                dispatch(fetchAllLocation());
            }
        })();
    }, [dispatch, locationState.status]);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: { headerBg: 'var(--green-500)', siderBg: 'var(--green-500)', footerBg: 'var(--green-500)' },
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
