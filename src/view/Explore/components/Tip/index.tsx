import { Button, Popover } from 'antd';
import classNames from 'classnames/bind';
import { Fragment, useState } from 'react';

import { ArrowIcon, XmarkIcon } from '~icons';
import { ILocationEntity } from '~modules/location';

import { Link } from 'react-router-dom';
import styles from './tip.module.scss';

interface ITipProps extends ILocationEntity {}

const cx = classNames.bind(styles);

function Tip({ articleSlug, mark, title, content, position }: ITipProps) {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpenChange = (open: boolean) => setOpen(open);

    return (
        <Popover
            open={open}
            arrow={false}
            trigger='click'
            content={
                <Fragment>
                    <div>
                        <div className={cx('title')}>{title}</div>
                        <div className={cx('content')}>{content}</div>
                    </div>
                    <Link to={articleSlug || ''} type='text' aria-label='go-to-article' className={cx('button-link')}>
                        <ArrowIcon />
                    </Link>
                </Fragment>
            }
            rootClassName={cx('popover')}
            onOpenChange={handleOpenChange}
        >
            <Button className={cx('button')} style={{ ...position }}>
                {open ? <XmarkIcon /> : mark}
            </Button>
        </Popover>
    );
}

export default Tip;
