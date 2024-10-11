import { Button } from 'antd';
import classNames from 'classnames/bind';
import { ReactZoomPanPinchContentRef } from 'react-zoom-pan-pinch';

import { MinusIcon, PlusLargeIcon } from '~icons';

import styles from './controls.module.scss';

const cx = classNames.bind(styles);

function Controls({ zoomIn, zoomOut }: ReactZoomPanPinchContentRef) {
    return (
        <div className={cx('wrap')}>
            <Button type='text' aria-label='thu-nho' className={cx('btn')} onClick={() => zoomOut()}>
                <MinusIcon />
            </Button>
            <div className={cx('separate')}></div>
            <Button type='text' aria-label='phong-to' className={cx('btn')} onClick={() => zoomIn()}>
                <PlusLargeIcon />
            </Button>
        </div>
    );
}

export default Controls;
