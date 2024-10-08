import { Carousel } from 'antd';
import classNames from 'classnames/bind';
import { CSSProperties } from 'react';

import { ArticleThumbnail, ArticleTitle, ButtonMore, Card, CarouselThumbnail, ItemThumbnailType } from '~components';
import { getLinkImageFromFirebase } from '~helper/getLinkImage';
import { ArrowLeftIcon, ArrowNarrowLeftIcon, ArrowRightIcon } from '~icons';

import styles from './staff.module.scss';

type CardType = {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    category: string;
    date: string;
};

interface IAntdArrowProps {
    currentSlide?: number;
    slideCount?: number;
    style?: CSSProperties;
}
interface IArrowProps {
    direction: 'left' | 'right';
}

const thuyTaThumbnails: ItemThumbnailType[] = [
    {
        id: '961d6baa-e74c-5c0e-8af7-9368e99c2def',
        imageSrc: '/o/introduce%2Fstaff-thuy-ta-1-min.png?alt=media&token=acc22632-1b75-435c-bb26-4c48e7d80c19',
        caption: 'Vua đầu bếp “Jan Can Cook” từng đến giao lưu với đội ngũ bếp của nhà hàng Thủy Tạ Đầm Sen',
    },
    {
        id: 'a77688d5-d1c6-5c65-8656-2c19024292db',
        imageSrc: '/o/introduce%2Fstaff-thuy-ta-2-min.jpg?alt=media&token=4c7bbb50-0b49-4151-b2bd-b3c6af927256',
        caption: 'caption',
    },
    {
        id: '52ecefe8-f6c6-549c-9453-50785f891fd4',
        imageSrc: '/o/introduce%2Fstaff-thuy-ta-3-min.jpg?alt=media&token=90d94a5c-2180-4ef9-bdce-391bd2652389',
        caption: 'caption',
    },
    {
        id: 'ef140326-6675-5274-828e-2528802b3283',
        imageSrc: '/o/introduce%2Fstaff-thuy-ta-4.webp?alt=media&token=b3d5c967-d6f1-48e4-afce-594d31b0ff24',
        caption: 'caption',
    },
    {
        id: 'b783a2ce-8341-553b-bd30-09fdc8fc86a5',
        imageSrc: '/o/introduce%2Fstaff-thuy-ta-5.webp?alt=media&token=8629f68c-556d-4ddf-a198-29e021c0a18b',
        caption: 'caption',
    },
];
const vuonDaThumbnails: ItemThumbnailType[] = [
    {
        id: '961d6baa-e74c-5c0e-8af7-9368e99c2def',
        imageSrc: '/o/introduce%2Fstaff-vuon-da-1.jpg?alt=media&token=969547ee-5fc5-4ab8-8917-e2876f040848',
        caption: 'không gian cà phê vườn đá Đầm sen buổi tối',
    },
    {
        id: 'a77688d5-d1c6-5c65-8656-2c19024292db',
        imageSrc: '/o/introduce%2Fstaff-vuon-da-2.jpg?alt=media&token=cd2e465b-1fe5-4702-a1b3-45d44a656e5d',
        caption: 'Một tảng đá hình thù kỳ dị tại cà phê Vườn Đá',
    },
    {
        id: '52ecefe8-f6c6-549c-9453-50785f891fd4',
        imageSrc: '/o/introduce%2Fstaff-vuon-da-3.jpg?alt=media&token=9431fa39-9a42-4832-a487-e8d8ad981787',
        caption: 'cà phê vườn đá',
    },
    {
        id: 'ef140326-6675-5274-828e-2528802b3283',
        imageSrc: '/o/introduce%2Fstaff-vuon-da-4.jpg?alt=media&token=f9b62ec8-e792-4bdf-bd83-8fb0c2968bf9',
        caption: 'Một tảng đá hình thù kỳ dị tại cà phê Vườn Đá',
    },
    {
        id: 'b783a2ce-8341-553b-bd30-09fdc8fc86a5',
        imageSrc: '/o/introduce%2Fstaff-vuon-da-5.jpg?alt=media&token=58b015dd-b381-4a80-9007-8f84fc0cbe6f',
        caption: 'không gian cà phê vườn đá Đầm sen buổi tối',
    },
];
const mayYouLikeList: CardType[] = [
    {
        id: 'roller-coaster',
        imageSrc: '/o/event%2Fmade-you-like-1-min.png?alt=media&token=2e7b1e4c-b5cf-46d1-8db3-1c39057d7fad',
        title: 'Roller Coaster',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-xoay-khong-gian',
        imageSrc: '/o/event%2Fmade-you-like-2-min.png?alt=media&token=0176697b-c422-45f0-9458-0f2a0f79ccf6',
        title: 'Vòng xoay không gian',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-quay-than-toc',
        imageSrc: '/o/event%2Fmade-you-like-3-min.png?alt=media&token=cb0b5dec-9f34-4423-a526-384f9972bed2',
        title: 'Vòng quay thần tốc',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'ca-chep-nhao-lon',
        imageSrc: '/o/event%2Fmade-you-like-4-min.png?alt=media&token=212f2572-fab3-4811-a8b3-25d502e13c4b',
        title: 'Cá chép nhào lộn',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'roller-coaster-fwfw',
        imageSrc: '/o/event%2Fmade-you-like-1-min.png?alt=media&token=2e7b1e4c-b5cf-46d1-8db3-1c39057d7fad',
        title: 'Roller Coaster',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-xoay-khong-gian-fwefwefwf',
        imageSrc: '/o/event%2Fmade-you-like-2-min.png?alt=media&token=0176697b-c422-45f0-9458-0f2a0f79ccf6',
        title: 'Vòng xoay không gian',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'vong-quay-than-toc-aggw',
        imageSrc: '/o/event%2Fmade-you-like-3-min.png?alt=media&token=cb0b5dec-9f34-4423-a526-384f9972bed2',
        title: 'Vòng quay thần tốc',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
    {
        id: 'ca-chep-nhao-lon-gwwgw',
        imageSrc: '/o/event%2Fmade-you-like-4-min.png?alt=media&token=212f2572-fab3-4811-a8b3-25d502e13c4b',
        title: 'Cá chép nhào lộn',
        description: '',
        category: 'Cảm giác mạnh',
        date: '10/02/2020',
    },
];

const cx = classNames.bind(styles);
const Arrow = ({ currentSlide, direction, slideCount, style, ...carouselProps }: IArrowProps & IAntdArrowProps) => (
    <>
        {direction === 'left' ? (
            <ArrowLeftIcon aria-label='arrow-left' style={{ ...style, display: 'inline-flex' }} {...carouselProps} />
        ) : (
            <ArrowRightIcon aria-label='arrow-right' style={{ ...style, display: 'inline-flex' }} {...carouselProps} />
        )}
    </>
);

function Staff() {
    const imageSrc: string =
        '/o/introduce%2Fstaff-thumbnail-min.png?alt=media&token=6c6fedbc-25cb-44c3-b7f4-dbbad8bcecdc';

    return (
        <div className='section introduce-staff'>
            <ArticleThumbnail src={getLinkImageFromFirebase(imageSrc)} />

            <ArticleTitle title='Thành viên' description='Thông tin về các đơn vị thành viên của CVVH Đầm Sen' />

            <div className='section__text-content'>
                <h2>nhà hàng thủy tạ</h2>

                <p style={{ display: 'inline-block' }}>
                    Đơn vị thành viên đầu tiên của Đầm Sen là Nhà hàng Thủy tạ nằm ở cổng số 2 của CVVH Đầm Sen. Địa chỉ
                    số 3 Hòa Bình, Quận 11, TP.HCM. Ra đời từ năm 1985, nằm trong lòng CVVH Đầm Sen (thuộc Công ty cổ
                    phần Dịch vụ & Du lịch Phú Thọ quản lý), nhà hàng Thủy Tạ đã định hình thương hiệu và không ngừng
                    phát triển. Hàng năm, đội ngũ nhân viên của nhà hàng đều được đào tạo nâng cao về nghiệp vụ cũng như
                    thái độ phục vụ để đáp ứng mọi yêu cầu của thực khách. Chính vì vậy, suốt nghiều năm qua, nhà hàng
                    Thủy Tạ Đầm Sen vẫn là cái tên được lựa chọn hàng đầu của các cá nhân và cơ quan đơn vị khi đặt tiệc
                    tổ chức sự kiện.
                </p>
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/introduce%2Fstaff-logo-thuy-ta-min.png?alt=media&token=6f46d73a-bb2b-4a24-9259-3b77c10a7ea5'
                    alt=''
                    data-role='logo-inline'
                    style={{ width: 163, height: 163, marginLeft: 80, verticalAlign: 'top' }}
                />
            </div>

            <ButtonMore type='primary' size='small' />

            <div className={cx('carousel-wrap')}>
                <CarouselThumbnail widthSlider='59.216%' items={thuyTaThumbnails} />
            </div>

            <div className='section__text-content'>
                <h2>cà phê vườn đá</h2>

                <p style={{ display: 'inline-block' }}>
                    Cà phê Vườn Đá bắt đầu hoạt động vào năm 2009. Đây được xem là cà phê rộng và “thiên nhiên” nhất tại
                    TP.HCM. Khuôn viên quán là một phần diện tích của CVVH Đầm Sen. Kiến trúc nhà sàn bên cạnh những
                    tảng đá thiên nhiên với đa dạng hình thù. Đồng thời có dòng suối chảy róc rách cùng những loài chim
                    thả tự nhiên. Khách đến có thể cảm nhận như một “Đà Lạt thu nhỏ”. Đồng thời, vào mỗi tối và sáng thứ
                    bảy - chủ nhật đều có biểu diễn nhạc sống.
                    <br />
                    Năm 2018, đơn vị thành viên của Đầm Sen này đã khai trương thêm gian triển lãm tranh đá quý để khách
                    tham quan có điều kiện thưỡng lãm.
                </p>
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/introduce%2Fstaff-logo-vuon-da-min.png?alt=media&token=87a84b25-ce2c-457b-9699-49c53300fe03'
                    alt=''
                    data-role='logo-inline'
                    style={{ width: 300, height: 106, marginLeft: 80, verticalAlign: 'top' }}
                />
            </div>

            <ButtonMore type='primary' size='small' />

            <div className={cx('carousel-wrap')}>
                <CarouselThumbnail widthSlider='59.216%' items={vuonDaThumbnails} />
            </div>

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
                {mayYouLikeList.map((card) => (
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
            </Carousel>
        </div>
    );
}

export default Staff;
