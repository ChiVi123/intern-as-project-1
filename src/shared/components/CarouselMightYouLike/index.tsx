import { Carousel } from 'antd';
import classNames from 'classnames/bind';
import { CSSProperties } from 'react';
import Card from '~components/Card';
import { ArrowLeftIcon, ArrowRightIcon } from '~icons';
import styles from './carousel-might-you-like.module.scss';

interface IAntdArrowProps {
    currentSlide?: number;
    slideCount?: number;
    style?: CSSProperties;
}
interface IArrowProps {
    direction: 'left' | 'right';
}
interface IProps {
    items: Blog[];
}

const Arrow = ({ currentSlide, direction, slideCount, style, ...carouselProps }: IArrowProps & IAntdArrowProps) => (
    <>
        {direction === 'left' ? (
            <ArrowLeftIcon aria-label='arrow-left' style={{ ...style, display: 'inline-flex' }} {...carouselProps} />
        ) : (
            <ArrowRightIcon aria-label='arrow-right' style={{ ...style, display: 'inline-flex' }} {...carouselProps} />
        )}
    </>
);

const cx = classNames.bind(styles);

function CarouselMightYouLike({ items }: IProps) {
    return (
        <>
            <h2 className={cx('heading-2')}>Có thể bạn thích</h2>
            <Carousel
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
                {items.map((card) => (
                    <Card key={'carousel-multi-item-' + card.id} {...card} short />
                ))}
            </Carousel>
        </>
    );
}

export default CarouselMightYouLike;
