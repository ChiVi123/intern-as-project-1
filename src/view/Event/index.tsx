import { config } from '@react-spring/web';
import { Button, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import classNames from 'classnames/bind';
import { getDocs, query, where } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

import { ArticleCard, ButtonMore, CarouselMightYouLike } from '~components';
import { getLinkImageFromFirebase } from '~helper/getLinkImage';
import { ArrowNarrowLeftIcon } from '~icons';
import { articleCollection, IArticleEntity } from '~modules/article';

import { topCarousel } from './data';

import styles from './event.module.scss';

const cx = classNames.bind(styles);

function Event() {
    const [goToSlide, setGoToSlide] = useState<number>(0);
    const [cards, setCards] = useState<IArticleEntity[]>([]);
    const [mightYouLikes, setMightYouLikes] = useState<IArticleEntity[]>([]);

    useEffect(() => {
        (async () => {
            const queryList = query(articleCollection, where('categorySlug', '==', 'su-kien'));
            const queryMightYouLikeList = query(articleCollection, where('categorySlug', '==', 'cam-giac-manh'));

            const snapshot = (await getDocs(queryList)).docs;
            const mightYouLikeSnapshot = (await getDocs(queryMightYouLikeList)).docs;

            setCards(snapshot.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMightYouLikes(mightYouLikeSnapshot.map((doc) => ({ ...doc.data(), id: doc.id })));
        })();
    }, []);

    const slides = useMemo(
        () =>
            topCarousel.map((item, index) => ({
                key: item.key,
                content: (
                    <div
                        key={item.id}
                        className={cx('top-carousel-item', { 'top-carousel-item--active': index === goToSlide })}
                    >
                        <img
                            src={getLinkImageFromFirebase(item.imageSrc)}
                            alt=''
                            className={cx('top-carousel-thumbnail')}
                        />
                        <div className={cx('top-carousel-wrap')}>
                            <div className={cx('top-carousel-content')}>
                                <h3
                                    dangerouslySetInnerHTML={{ __html: item.heading }}
                                    className={cx('top-carousel-heading')}
                                ></h3>

                                <p className={cx('top-carousel-description')}>{item.description}</p>
                            </div>

                            <ButtonMore type='primary' />
                        </div>
                    </div>
                ),
                onClick: () => setGoToSlide(index),
            })),
        [goToSlide],
    );

    const handleBackToSlide = () => {
        setGoToSlide((prev) => (prev === 0 ? topCarousel.length - 1 : prev - 1));
    };
    const handleGoToSlide = () => {
        setGoToSlide((prev) => (prev >= topCarousel.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='section'>
            <Title level={1} role='heading' className={cx('title')}>
                Sự kiện
            </Title>

            <div className={cx('top-carousel')}>
                <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    offsetRadius={2}
                    showNavigation={false}
                    animationConfig={config.gentle}
                    offsetFn={(offsetFromRadius) => {
                        const distanceFactor = 1 - Math.abs(offsetFromRadius * 0.1);
                        return {
                            transform: `translate(${-50 + offsetFromRadius * -18}%, -50%) scale(${distanceFactor})`,
                        };
                    }}
                />
            </div>

            <ul className={cx('carousel-3d-dots')}>
                <li className={cx('carousel-3d-arrow')}>
                    <Button
                        type='text'
                        aria-label='button-previous-top-carousel'
                        className={cx('carousel-3d-button')}
                        onClick={handleBackToSlide}
                    >
                        <ArrowNarrowLeftIcon />
                    </Button>
                </li>

                {topCarousel.map((_, index) => (
                    <li
                        key={'carousel-3d' + index}
                        className={cx('carousel-3d-dot', { 'carousel-3d-dot--active': index === goToSlide })}
                        onClick={() => setGoToSlide(index)}
                    ></li>
                ))}
                <li className={cx('carousel-3d-arrow')}>
                    <Button
                        type='text'
                        aria-label='button-next-top-carousel'
                        className={cx('carousel-3d-button')}
                        onClick={handleGoToSlide}
                    >
                        <ArrowNarrowLeftIcon className='rotate-180' />
                    </Button>
                </li>
            </ul>

            <div style={{ marginTop: '40px' }}></div>

            <Row gutter={[24, 24]}>
                {cards.map((card) => (
                    <Col key={'list' + card.id} span={24} sm={12} md={8} lg={12} xl={8} xxl={6}>
                        <ArticleCard {...card} />
                    </Col>
                ))}
            </Row>

            <div className={cx('article-list-navigate')}>
                <a href='#!' className={cx('article-list-navigate-link')}>
                    <ArrowNarrowLeftIcon />
                    Phượng hoàng bay
                </a>
                <a href='#!' className={cx('article-list-navigate-link')}>
                    Tàu vượt thác
                    <ArrowNarrowLeftIcon className='rotate-180' />
                </a>
            </div>

            <CarouselMightYouLike items={mightYouLikes} />
        </div>
    );
}

export default Event;
