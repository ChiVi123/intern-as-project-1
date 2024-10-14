import { Button, Popover } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { XmarkIcon } from '~icons';
import { ILocationEntity } from '~modules/location';

import styles from './tip.module.scss';

interface ITipProps extends ILocationEntity {}

const cx = classNames.bind(styles);

function Tip({ mark, title, content, position }: ITipProps) {
    const [open, setOpen] = useState<boolean>(false);
    const handleHide = () => setOpen(false);
    const handleOpenChange = (open: boolean) => setOpen(open);

    return (
        <Popover
            open={open}
            arrow={false}
            title={title}
            trigger='click'
            content={<span onClick={handleHide}>{content}</span>}
            onOpenChange={handleOpenChange}
        >
            <Button className={cx('tip')} style={{ ...position }}>
                {open ? <XmarkIcon /> : mark}
            </Button>
        </Popover>
    );
}

export default Tip;
