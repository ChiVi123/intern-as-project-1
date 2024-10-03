import { Button, Drawer } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuTransitionGroupProvider, TransitionGroupType } from '~components';
import { ArrowLeftIcon, MenuIcon, XmarkLargeIcon } from '~icons';

import styles from './header.module.scss';

const transitionGroups: TransitionGroupType[] = [
    {
        groupname: 'main',
        className: 'main',
        navItems: [
            {
                key: '/',
                label: 'Trang Chủ',
                toLink: '/',
            },
            {
                key: '/explore',
                label: 'Khám Phá',
                toLink: '/explore',
            },
            {
                key: '/list',
                label: 'Danh Sách',
                toLink: '/list',
            },
            {
                key: '/introduce',
                label: 'Giới Thiệu',
                toLink: '/introduce',
                goTo: 'main/introduce',
            },
            {
                key: '/ticket',
                label: 'Giá Vé',
                goTo: 'main/ticket',
            },
            {
                key: '/event',
                label: 'Sự Kiện',
                toLink: '/event',
            },
        ],
    },
    {
        groupname: 'main/introduce',
        className: 'sub',
        navItems: [
            {
                key: '/introduce/history',
                parentKey: '/introduce',
                label: 'Lịch sử hình thành',
                toLink: '/introduce/history',
            },
            {
                key: '/introduce/staff',
                parentKey: '/introduce',
                label: 'Thành viên',
                toLink: '/introduce/staff',
            },
            {
                key: '/introduce/policy',
                parentKey: '/introduce',
                label: 'Chính sách bảo mật',
                toLink: '/introduce/policy',
            },
        ],
    },
    {
        groupname: 'main/ticket',
        className: 'sub',
        navItems: [
            {
                key: '/ticket/inside-park',
                parentKey: '/ticket',
                label: 'Vé trong công viên',
                toLink: '/ticket/inside-park',
            },
            {
                key: '/ticket/group',
                parentKey: '/ticket',
                label: 'Vé tập thể',
                toLink: '/ticket/group',
            },
            {
                key: '/ticket/service',
                parentKey: '/ticket',
                label: 'Vé dịch vụ',
                toLink: '/ticket/service',
            },
            {
                key: '/ticket/exercise',
                parentKey: '/ticket',
                label: 'Vé tập thể dục',
                toLink: '/ticket/exercise',
            },
        ],
    },
];
const cx = classNames.bind(styles);

function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const [menuGroupname, setMenuGroupname] = useState<string>('main');

    const handleCloseDrawer = () => {
        setOpen(false);
        setMenuGroupname('main');
    };
    const handleGoBackGroup = () => {
        setMenuGroupname((prev) => prev.split('/').slice(0, -1).join(''));
    };

    return (
        <div className={cx('wrapper')}>
            <Link to='/' className={cx('logo-link')}>
                <img src='/logo.png' alt='logo' className={cx('logo-image')} />
            </Link>

            <Button type='text' onClick={() => setOpen(true)}>
                <MenuIcon className={cx('collapsed-icon')} />
            </Button>

            <Drawer
                width={212}
                open={open}
                title={
                    <>
                        {menuGroupname !== 'main' && (
                            <button
                                type='button'
                                aria-label='go-back-group'
                                className='ant-drawer-close'
                                onClick={handleGoBackGroup}
                            >
                                <ArrowLeftIcon />
                            </button>
                        )}
                    </>
                }
                closeIcon={<XmarkLargeIcon />}
                classNames={{
                    mask: 'custom-header-drawer-mask',
                    header: 'custom-header-drawer-header',
                    content: 'custom-header-drawer-content',
                    body: 'custom-header-drawer-body',
                }}
                onClose={handleCloseDrawer}
            >
                <MenuTransitionGroupProvider
                    items={transitionGroups}
                    name={menuGroupname}
                    onNameChange={(value) => setMenuGroupname(value)}
                />
            </Drawer>
        </div>
    );
}

export default Header;
