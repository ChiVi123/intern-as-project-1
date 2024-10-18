import { Button, Carousel, ConfigProvider } from 'antd';
import classNames from 'classnames/bind';
import { ArrowLeftIcon, ArrowRightIcon } from '~icons';
import styles from './home.module.scss';

interface AntdArrowProps {
    currentSlide?: number;
    slideCount?: number;
}

interface ArrowProps {
    direction: 'left' | 'right';
}

const cx = classNames.bind(styles);

const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }: ArrowProps & AntdArrowProps) =>
    direction === 'left' ? <ArrowLeftIcon {...carouselProps} /> : <ArrowRightIcon {...carouselProps} />;

function Home() {
    return (
        <ConfigProvider theme={{ components: { Carousel: { dotGap: 9, dotHeight: 16 } } }}>
            <div className={cx('wrapper')}>
                <Carousel
                    arrows
                    infinite={false}
                    prevArrow={<Arrow direction='left' />}
                    nextArrow={<Arrow direction='right' />}
                    className='home-custom-slick'
                >
                    <img src='/home-1.png' alt='home-1' />
                    <img src='/home-2.png' alt='home-2' />
                    <img src='/home-1.png' alt='home-3' />
                    <img src='/home-2.png' alt='home-4' />
                </Carousel>

                <Button type='primary' className={cx('custom-btn', 'button-explore')}>
                    KHÁM PHÁ NGAY
                </Button>
            </div>
        </ConfigProvider>
    );
}

export default Home;
