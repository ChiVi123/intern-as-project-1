import { config } from '@react-spring/web';
import { Button, Carousel as CarouselAntd, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

import { ButtonMore, Card } from '~components';
import { getLinkImageFromFirebase } from '~helper/getLinkImage';
import { ArrowLeftIcon, ArrowNarrowLeftIcon, ArrowRightIcon } from '~icons';

import { cards, maybeYouLikeList, topCarousel } from './data';

import styles from './event.module.scss';

interface IAntdArrowProps {
    currentSlide?: number;
    slideCount?: number;
}
interface IArrowProps {
    direction: 'left' | 'right';
}

const cx = classNames.bind(styles);

const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }: IArrowProps & IAntdArrowProps) => (
    <>{direction === 'left' ? <ArrowLeftIcon {...carouselProps} /> : <ArrowRightIcon {...carouselProps} />}</>
);

function Event() {
    const [goToSlide, setGoToSlide] = useState<number>(0);

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
                        <Card
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            imageSrc={card.imageSrc}
                            category={card.category}
                            date={card.date}
                        />
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

            <h2 className={cx('heading-2')}>Có thể bạn thích</h2>

            <CarouselAntd
                arrows
                infinite={false}
                dots={false}
                slidesToShow={4}
                responsive={[
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                        },
                    },
                ]}
                prevArrow={<Arrow direction='left' />}
                nextArrow={<Arrow direction='right' />}
                className='custom-carousel custom-carousel--multi-item'
            >
                {maybeYouLikeList.map((card) => (
                    <Card
                        key={'carousel' + card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                        category={card.category}
                        date={card.date}
                        short
                    />
                ))}
            </CarouselAntd>
        </div>
    );
}

export default Event;
