import classNames from 'classnames/bind';
import { NavLink, useLocation } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { ArrowIcon } from '~icons';

import styles from './navbar.module.scss';

const cx = classNames.bind(styles);

interface INavItem {
    key: string;
    label: string;
    children?: INavItem[];
}

const menuItems: INavItem[] = [
    {
        key: '/',
        label: 'Trang chủ',
    },
    {
        key: '/explore',
        label: 'Khám phá',
    },
    {
        key: '/introduce',
        label: 'Giới thiệu',
        children: [
            { key: '/history', label: 'Lịch sử hình thành' },
            { key: '/staff', label: 'Thành viên' },
            { key: '/policy', label: 'Chính sách bảo mật' },
        ],
    },
    {
        key: '/ticket',
        label: 'Giá vé',
        children: [
            { key: '/ticket/inside', label: 'Vé trong công viên' },
            { key: '/ticket/group', label: 'Vé tập thể' },
            { key: '/ticket/service', label: 'Vé dịch vụ' },
            { key: '/ticket/exercise', label: 'Vé tập thể dục' },
        ],
    },
    {
        key: '/event',
        label: 'Sự kiện',
    },
];

function Navbar() {
    const { pathname } = useLocation();

    const navItem = (item: INavItem, isRoot: boolean) => (
        <Fragment key={item.key}>
            {item.children ? (
                <div
                    className={cx('item', {
                        'item--root': isRoot,
                        'item--active': item.key === pathname,
                    })}
                >
                    <span className={cx('item-label')}>{item.label}</span>
                    {item.children && (
                        <span className={cx('item-icon')}>
                            <ArrowIcon />
                        </span>
                    )}

                    {item.children && (
                        <div className={cx('item-submenu')}>{item.children.map((child) => navItem(child, false))}</div>
                    )}
                </div>
            ) : (
                <NavLink
                    to={item.key}
                    className={({ isActive }) =>
                        cx('item', {
                            'item--root': isRoot,
                            'item--active': isActive,
                        })
                    }
                >
                    <span className={cx('item-label')}>{item.label}</span>
                    {item.children && (
                        <span className={cx('item-icon')}>
                            <ArrowIcon />
                        </span>
                    )}
                </NavLink>
            )}
        </Fragment>
    );

    return <nav className={cx('wrapper')}>{menuItems.map((item) => navItem(item, true))}</nav>;
}
export default Navbar;
