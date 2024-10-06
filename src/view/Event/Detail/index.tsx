import { Carousel } from 'antd';
import classNames from 'classnames/bind';

import { ArticleThumbnail, ArticleTitle, Card } from '~components';
import { getLinkImageFromFirebase } from '~helper/getLinkImage';
import { ArrowLeftIcon, ArrowNarrowLeftIcon, ArrowRightIcon } from '~icons';

import styles from './detail.module.scss';

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
}
interface IArrowProps {
    direction: 'left' | 'right';
}

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

const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }: IArrowProps & IAntdArrowProps) => (
    <>{direction === 'left' ? <ArrowLeftIcon {...carouselProps} /> : <ArrowRightIcon {...carouselProps} />}</>
);
function Detail() {
    const imageSrc: string =
        '/o/event%2Fevent-detail-thumbnail.png?alt=media&token=3005561b-985f-490a-a4f7-a0edab84f5bf';
    return (
        <div className='section'>
            <ArticleThumbnail src={getLinkImageFromFirebase(imageSrc)} />

            <ArticleTitle
                title='Nhạc nước Đầm Sen Water show'
                description='Sắp ra mắt nhạc nước Đầm Sen Water Show'
                category='Sắp diễn ra'
                date='11/02/2020'
            />

            <div className='section__text-content'>
                <p>
                    CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn
                    hơn 100 mét, kết hợp với khói lửa, công nghệ Laser dance và màn hình khổng lồ hình rẽ quạt, được tạo
                    bằng nước với chiều ngang 40 mét, và chiều cao 20 mét.
                </p>
                <figure>
                    <img
                        src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/event%2Fevent-detail-article-1.png?alt=media&token=24bed725-51e4-4219-9887-517791ca544f'
                        alt='Ảnh minh họa dự án Đầm Sen Water show'
                    />
                    <figcaption>Ảnh minh họa dự án Đầm Sen Water show</figcaption>
                </figure>
                <p>
                    Sau đại dịch Covid 19, CVVH Đầm Sen đã dần phục hồi trở lại. Đặc biệt là tiếp tục triển khai dự án
                    nhạc nước Đầm Sen Water Show. Đây được xem là công trình nhạc nước hoàn toàn mới tại TP.HCM, được
                    biểu diễn ngay trên mặt hồ của công viên. Điểm đặc biệt của công trình nhạc nước này, là hình ảnh 3D
                    được chiếu trên màn hình rẽ quạt khổng lồ được tạo bằng nước, rộng 40 mét (cao 20 mét). Hệ thống vòi
                    phun nhạc nước hiện đại trên thê giới hiện nay, được lập trình kỹ lưỡng đến từng giây. Hệ thống khói
                    lửa được tạo ra ngay trên mặt hồ. Đồng thời, hệ thống ánh sáng laser hiện đại được nhập từ Châu Âu,
                    và hệ thống âm thanh với cả chục chiếc loa công suất lớn, đặt xung quanh hồ để tạo hiệu ứng cho
                    người xem.
                </p>
                <figure>
                    <img
                        src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/event%2Fevent-detail-article-2.png?alt=media&token=f282f24d-e63f-4b38-9810-091eb4b27faf'
                        alt='Vị trí ngồi rộng rãi tại nhà hàng Thủy Ta xem biểu diễn Laser show màn nước 3D trên hồ Đầm Sen 2019'
                    />
                    <figcaption>
                        Vị trí ngồi rộng rãi tại nhà hàng Thủy Ta xem biểu diễn Laser show màn nước 3D trên hồ Đầm Sen
                        2019
                    </figcaption>
                </figure>

                <p>
                    Trước đây, CVVH Đầm Sen đã từng có công trình nhạc nước, nhưng với quy mô nhỏ tại khu vực{' '}
                    <a href='#!'>quảng trường La Mã</a>. Rồi đến tháng tư năm 2019,{' '}
                    <a href='#!'>Công ty Cổ phần Dịch vụ Du lịch Phú Thọ</a>
                    (Phuthotourist - cơ quan chủ quản của Đầm Sen) đã quyết định đầu tư giai đoạn 1 của dự án nhạc nước
                    trên mặt hồ với <a href='#!'>công trình màn nước laser show</a>. Đến nay, giai đoạn 2 của hệ thống
                    đang dần hoàn thiện trong tháng 11. Dự kiến Đầm Sen Water Show sẽ chính thức ra mắt vào đầu tháng
                    12/2020, để kịp phục vụ du khách vào những sự kiện cuối năm.
                </p>

                <p>
                    Ban lãnh đạo Phuthotourist cũng đang cân nhắc liệu có cho phép du khách được thưởng thức nhạc nước
                    bằng <a href='#!'>thuyền Pedalo</a> trên mặt hồ. Nếu được, chắc chắn đây sẽ là điểm thú vị cho du
                    khách được trải nghiệm cảm giác ở ngồi trên nước và xem nhạc nước như thế nào.
                </p>
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

export default Detail;
