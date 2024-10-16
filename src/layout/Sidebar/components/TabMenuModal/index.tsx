import { Button, Modal, Tabs, TabsProps } from 'antd';
import classNames from 'classnames/bind';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '~core/store';
import { MenuIcon, XmarkLargeIcon } from '~icons';
import { fetchCategoryTree } from '~modules/category';
import { fetchAllLocation } from '~modules/location';
import { fetchTabMenu } from '~modules/tabMenu';
import { selectTabMenuState } from '~modules/tabMenu/slice';

import { TabContent } from './components';
import styles from './tab-menu-modal.module.scss';

const cx = classNames.bind(styles);

function TabMenuModal() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const tabMenuState = useSelector(selectTabMenuState);
    const ignoreFetch = useRef<boolean>(false);
    const dispatch = useAppDispatch();

    const tabMenu: TabsProps['items'] = useMemo((): TabsProps['items'] => {
        if (tabMenuState.status === 'pending' || tabMenuState.status === 'rejected') {
            return [];
        }

        return tabMenuState.data.map(({ children: data, ...rest }) => ({
            ...rest,
            children: (
                <TabContent
                    key={rest.key}
                    data={data || []}
                    onClose={() => {
                        setModalOpen(false);
                    }}
                />
            ),
        }));
    }, [tabMenuState.data, tabMenuState.status]);

    useEffect(() => {
        (async function () {
            if (!ignoreFetch.current) {
                await dispatch(fetchAllLocation());
                await dispatch(fetchCategoryTree());
                await dispatch(fetchTabMenu());
            }
        })();

        return () => {
            ignoreFetch.current = true;
        };
    }, [dispatch]);

    const handleOpen = () => setModalOpen((prev) => !prev);

    console.log(tabMenuState.data);

    return (
        <div className={cx('modal-wrapper')}>
            <Button className={cx('modal-btn')} onClick={handleOpen}>
                {modalOpen ? (
                    <XmarkLargeIcon className={cx('modal-icon')} />
                ) : (
                    <MenuIcon className={cx('modal-icon')} />
                )}
            </Button>

            <Modal
                width='auto'
                open={modalOpen}
                closeIcon={null}
                footer={null}
                mask={false}
                classNames={{
                    wrapper: 'custom-sider-modal-wrap',
                    content: 'custom-sider-modal-content',
                    body: 'custom-sider-modal-body',
                }}
            >
                <Tabs items={tabMenu} className='custom-sider-tabs' />
            </Modal>
        </div>
    );
}

export default TabMenuModal;
