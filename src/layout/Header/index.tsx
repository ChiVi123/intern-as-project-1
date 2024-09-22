import { Button, Drawer } from 'antd';
import { MenuIcon, XmarkLargeIcon } from '~icons';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

interface IProps {}

const cx = classNames.bind(styles);

function Header(_: IProps) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={cx('wrapper')}>
            <Link to='/' className={cx('logo-link')}>
                <img src='/logo.png' alt='logo' className={cx('logo-image')} />
            </Link>

            <Button type='text' onClick={() => setOpen(true)}>
                <XmarkLargeIcon className={cx('collapsed-icon')} />
            </Button>

            <Drawer
                width={212}
                open={open}
                closeIcon={<MenuIcon />}
                classNames={{
                    mask: 'custom-header-drawer-mask',
                    header: 'custom-header-drawer-header',
                    content: 'custom-header-drawer-content',
                    body: 'custom-header-drawer-body',
                }}
                onClose={() => setOpen(false)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
}

export default Header;
