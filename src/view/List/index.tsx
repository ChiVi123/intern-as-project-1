import { ConfigProvider, Tabs, TabsProps } from 'antd';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTabMenuState } from '~modules/tabMenu/slice';
import { TabContentMobile } from './component';

function List() {
    const tabMenuState = useSelector(selectTabMenuState);

    const tabMenu: TabsProps['items'] = useMemo((): TabsProps['items'] => {
        if (tabMenuState.status === 'pending' || tabMenuState.status === 'rejected') {
            return [];
        }

        return tabMenuState.data.map(({ children: data, ...rest }) => ({
            ...rest,
            children: <TabContentMobile key={rest.key} data={data || []} />,
        }));
    }, [tabMenuState.data, tabMenuState.status]);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        horizontalItemGutter: 0,
                        itemColor: '#67776F',
                        itemHoverColor: '#67776F',
                        itemSelectedColor: 'var(--pink-500)',
                        inkBarColor: 'var(--pink-500)',
                    },
                },
            }}
        >
            <Tabs items={tabMenu} className='custom-sider-tabs' style={{ minHeight: 'calc(100vh - 50px)' }} />
        </ConfigProvider>
    );
}

export default List;
