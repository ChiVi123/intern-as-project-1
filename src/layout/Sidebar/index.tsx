import { ConfigProvider, Menu, MenuProps } from 'antd';
import classNames from 'classnames/bind';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ArrowIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from '~icons';

import { TabMenuModal } from './components';

import styles from './sidebar.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

const cx = classNames.bind(styles);

const ExpandIcon = ({ isSubMenu, isOpen, popupStyle, popupClassName, eventKey, title, ...props }: any) => (
    <ArrowIcon {...props} />
);

function Sidebar() {
    const { pathname } = useLocation();
    const menuItems = useMemo<MenuItem[]>(
        () => [
            {
                key: '/',
                label: <Link to='/'>Trang chủ</Link>,
            },
            {
                key: '/explore',
                label: <Link to='/explore'>Khám phá</Link>,
            },
            {
                key: '/introduce',
                label: <Link to='/introduce'>Giới thiệu</Link>,
                children: [
                    {
                        key: '/introduce/history',
                        label: <Link to='/introduce/history'>Lịch sử hình thành</Link>,
                    },
                    { key: 'introduce-1', type: 'divider' },
                    {
                        key: '/introduce/staff',
                        label: <Link to='/introduce/staff'>Thành viên</Link>,
                    },
                    { key: 'introduce-2', type: 'divider' },
                    {
                        key: '/introduce/policy',
                        label: <Link to='/introduce/policy'>Chính sách bảo mật</Link>,
                    },
                ],
            },
            {
                key: '/ticket',
                label: 'Giá vé',
                children: [
                    {
                        key: '/ticket/inside-park',
                        label: <Link to='/ticket/inside-park'>Vé trong công viên</Link>,
                    },
                    { key: 'ticket-1', type: 'divider' },
                    {
                        key: '/ticket/group',
                        label: <Link to='/ticket/group'>Vé tập thể</Link>,
                    },
                    { key: 'ticket-2', type: 'divider' },
                    {
                        key: '/ticket/service',
                        label: <Link to='/ticket/service'>Vé dịch vụ</Link>,
                    },
                    { key: 'ticket-3', type: 'divider' },
                    {
                        key: '/ticket/exercise',
                        label: <Link to='/ticket/exercise'>Vé tập thể dục</Link>,
                    },
                ],
            },
            {
                key: '/event',
                label: <Link to='/event'>Sự kiện</Link>,
            },
        ],
        [],
    );

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
                    Menu: {
                        colorIconHover: 'var(--green-hover-color)',
                        itemHoverBg: 'transparent',
                        itemColor: 'var(--white)',
                        itemHoverColor: 'var(--green-hover-color)',
                        itemSelectedBg: 'transparent',
                        itemActiveBg: 'transparent',
                        itemSelectedColor: 'var(--active-menu-color)',
                    },
                },
                token: {
                    colorLinkHover: 'inherit',
                },
            }}
        >
            <TabMenuModal />

            <Menu
                items={menuItems}
                selectedKeys={[pathname]}
                expandIcon={ExpandIcon}
                className='custom-navbar'
                rootClassName='custom-navbar-submenu'
            />

            <img src='/logo-with-text.png' alt='logo' className={cx('logo')} />

            <div className={cx('separate')}></div>

            <div className={cx('socials')}>
                <FacebookIcon className={cx('socials-icon')} />
                <YoutubeIcon className={cx('socials-youtube')} />
                <InstagramIcon className={cx('socials-icon')} />
            </div>
        </ConfigProvider>
    );
}

export default Sidebar;
