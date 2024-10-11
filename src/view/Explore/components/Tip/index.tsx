import { Button, Popover } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { XmarkIcon } from '~icons';

import { TipType } from '../../data';
import styles from './tip.module.scss';

interface ITipProps extends TipType {
    index: number;
}

const cx = classNames.bind(styles);

function Tip({ index, title, content, position }: ITipProps) {
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
                {open ? <XmarkIcon /> : String(index + 1).padStart(2, '0')}
            </Button>
        </Popover>
    );
}

export default Tip;
