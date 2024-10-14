import { Button, Flex, Popover } from 'antd';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import { WarningCircleIcon } from '~icons';
import { selectLocationState } from '~modules/location/slice';

import { Controls, Tip } from './components';
import { notes } from './data';

import styles from './explore.module.scss';

const cx = classNames.bind(styles);

function ExplorePage() {
    const { data: locations } = useSelector(selectLocationState);

    return (
        <div className={cx('wrap')}>
            <TransformWrapper wheel={{ wheelDisabled: true }} panning={{ wheelPanning: true }}>
                {(utils) => (
                    <Fragment>
                        <Popover
                            arrow={false}
                            placement='bottomRight'
                            title='CHÚ THÍCH'
                            content={
                                <Flex wrap>
                                    {notes.map((col, index) => (
                                        <div key={index} className={cx('note-btn-col')}>
                                            {col.map((item) => (
                                                <div key={item.id} className={cx('note-item')}>
                                                    <div className={cx('note-image')}></div>
                                                    <div className={cx('note-content')}>{item.content}</div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </Flex>
                            }
                            rootClassName='explore-page-custom-note-btn'
                        >
                            <Button type='text' className={cx('note-btn')}>
                                <WarningCircleIcon className={cx('note-btn-icon')} />
                            </Button>
                        </Popover>

                        <Controls {...utils} />

                        <TransformComponent
                            wrapperClass={cx('transform-wrapper')}
                            contentClass={cx('transform-content')}
                        >
                            <div className={cx('note')}>
                                <div className={cx('note-heading-wrap')}>
                                    <div className={cx('note-heading-content')}>CHÚ THÍCH</div>
                                </div>

                                <div className={cx('note-list')}>
                                    {notes.map((col, index) => (
                                        <div key={index} className={cx('note-col')}>
                                            {col.map((item) => (
                                                <div key={item.id} className={cx('note-item')}>
                                                    <div className={cx('note-image')}></div>
                                                    <div className={cx('note-content')}>{item.content}</div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {locations.map((tip) => (
                                <Tip key={tip.id} {...tip} />
                            ))}

                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/explore%2Ftitle-min.png?alt=media&token=08656078-172e-4182-9927-d977159f67bf'
                                alt='dam sen the gioi tuyen voi'
                                className={cx('image-title')}
                            />

                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/explore%2Fmap-min.png?alt=media&token=fde4abe0-31bd-4505-8d7a-70d1bd650966'
                                alt='ban do dam sen'
                                className={cx('image-content')}
                            />
                        </TransformComponent>
                    </Fragment>
                )}
            </TransformWrapper>
        </div>
    );
}

export default ExplorePage;
