import { default as Carousel, Settings, default as Slider } from '@ant-design/react-slick';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '~icons';

type ItemThumbnailType = { id: string; imageSrc: string; caption: string };

interface IAntdArrowProps {
    currentSlide?: number;
    slideCount?: number;
    style?: CSSProperties;
}
interface IArrowProps {
    direction: 'left' | 'right';
}

interface ISlideProps {
    item: ItemThumbnailType;
    baseURL: string;
    pathname: string;
    style?: CSSProperties;
}
interface IProps {
    widthSlider?: string;
    marginSlider?: string;
    items: ItemThumbnailType[];
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

const ThumbnailPaging = ({ item, baseURL, pathname, style }: ISlideProps) => (
    <div style={{ ...style, display: 'flex' }}>
        <img src={baseURL + pathname + item.imageSrc} alt={item.caption} />
    </div>
);

function CarouselThumbnail({ widthSlider, marginSlider, items }: IProps) {
    const [nav1, setNav1] = useState<Slider | null>();
    const [nav2, setNav2] = useState<Slider | null>();
    const sliderRef1 = useRef<Slider | null>();
    const sliderRef2 = useRef<Slider | null>();

    const baseURL: string = 'https://firebasestorage.googleapis.com';
    const pathname: string = '/v0/b/intern-as-project-1.appspot.com';
    const settings: Settings = { centerMode: true, centerPadding: '0' };

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    return (
        <>
            <div style={{ width: widthSlider, margin: marginSlider }} className='carousel-thumbnail'>
                <Carousel
                    {...settings}
                    ref={(slider) => (sliderRef1.current = slider)}
                    asNavFor={nav2 || undefined}
                    arrows
                    slidesToShow={1}
                    nextArrow={<Arrow direction='right' />}
                    prevArrow={<Arrow direction='left' />}
                    className='carousel-thumbnail__slider'
                >
                    {items.map((item) => (
                        <figure key={item.id}>
                            <img src={baseURL + pathname + item.imageSrc} alt={item.caption} />
                            <figcaption>{item.caption}</figcaption>
                        </figure>
                    ))}
                </Carousel>
            </div>
            <div className='carousel-thumbnail'>
                <Carousel
                    {...settings}
                    ref={(slider) => (sliderRef2.current = slider)}
                    asNavFor={nav1 || undefined}
                    focusOnSelect
                    arrows={false}
                    slidesToShow={5}
                    className='carousel-thumbnail__paging'
                >
                    {items.map((item) => (
                        <ThumbnailPaging key={item.id} item={item} baseURL={baseURL} pathname={pathname} />
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export type { ItemThumbnailType };
export default CarouselThumbnail;
