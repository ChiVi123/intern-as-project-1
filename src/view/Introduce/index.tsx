import Title from 'antd/es/typography/Title';
import classNames from 'classnames/bind';
import { ElementType } from 'react';

import { ButtonMore } from '~components';
import { ClockActionIcon, ClockBuyTicketIcon, ScheduleOpenIcon } from '~icons';

import styles from './introduce.module.scss';

type Article = { heading: string; description: string; imageSrc: string; imageCaption: string };
type Schedule = { heading: string; descriptions: string[]; IconComponent: ElementType };
type Ticket = { title: string; subTitle: string; description: string; imageSrc: string; theme: 'green' | 'pink' };
type RowTicket = { isReverse?: boolean; row: Ticket[] };

const articles: Article[] = [
    {
        heading: 'Hơn 30 trò chơi',
        description:
            'Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh (Tàu lượn siêu tốc, vượt thác, Power Surge…); 5 trò chơi tương tác ảo công nghệ hiện đại; 5 trò chơi thư giãn; 12 trò chơi thiếu nhi; và nhiều trò chơi khác.',
        imageSrc: '/intro/intro-1-2.png',
        imageCaption: 'Công viên Văn hóa Đầm Sen từ trên cao.',
    },
    {
        heading: 'Nhiều loại thú quý hiếm',
        description:
            'Đầm Sen còn được biết đến như một vườn thú có thể nuôi sinh sản được các loại động vật quý hiếm (thuộc sách đỏ) như: đười ươi Sumatra (sinh 2 lần); vượn má vàng; chim già đẩy, chim Giang sen… Ngoài ra còn có một Thủy cung với các loài thủy sinh vật biển và cá Amazon phong phú, như cá mập, cá Hải tượng (2 mét)',
        imageSrc: '/intro/intro-1-3.png',
        imageCaption: 'Vượn đen má vàng tại Công viên Văn hóa Đầm Sen.',
    },
    {
        heading: 'Nhà hàng Thủy Tạ Đầm Sen',
        description:
            'Ẩm thực trong Công viên Văn hóa Đầm Sen gồm nhiều món ăn đường phố trong công viên, đặc biệt là nhà hàng Thủy Tạ, với không gian thưởng thức ẩm thực bên hồ.',
        imageSrc: '/intro/intro-1-4.png',
        imageCaption: 'Nhà hàng Thủy Tạ - Công viên Văn hóa Đầm Sen',
    },
    {
        heading: 'Cà phê Vườn Đá',
        description:
            'Cà phê Vườn đá có không gian rộng, và nhiều cây xanh tại Sài Gòn. Đặc biệt, trong khuôn viên cà phê có một bộ sưu tập đá khổng lồ, với nhiều hình dáng kỳ dị theo nhãn quan của mỗi người. Buổi sáng thứ bảy và chủ nhật, quán thường đông khách do có nhạc sống, với những ca khúc bất hủ của thập niên 70-80, do các ban nhạc chuyên nghiệp TP.HCM biểu diễn.',
        imageSrc: '/intro/intro-1-5.png',
        imageCaption: 'Hình ảnh Cổng cà phê Vườn Đá tại công viên Đầm Sen',
    },
];
const schedules: Schedule[] = [
    { heading: 'NGÀY MỞ CỬA', descriptions: ['Tất cả các ngày (trừ thứ 3)'], IconComponent: ScheduleOpenIcon },
    {
        heading: 'GIỜ BÁN VÉ',
        descriptions: ['Ngày thường: <strong>7h30 - 16h00</strong>', 'Cuối tuần + Lễ: <strong>7h30 - 19h00</strong>'],
        IconComponent: ClockBuyTicketIcon,
    },
    {
        heading: 'GIỜ HOẠT ĐỘNG',
        descriptions: ['Ngày thường: <strong>8h00 - 18h00</strong>', 'Cuối tuần + Lễ: <strong>7h30 - 21h00</strong>'],
        IconComponent: ClockActionIcon,
    },
];
const rowTickets: RowTicket[] = [
    {
        row: [
            {
                title: 'Vé khách lẻ',
                subTitle: '80k - 380k/vé/người',
                description:
                    'Là loại vé được bán tại các quầy trong công viên cho từng khách. Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách',
                imageSrc: '/intro/ticket-1.png',
                theme: 'green',
            },
            {
                title: 'Vé thể dục',
                subTitle: '5k/vé/người',
                description:
                    'Quý khách có thể vào CVVH Đầm Sen để tập thể dục quanh hồ thoáng mát vào mỗi buổi sáng, trên diện tích 32 hecta với nhiều cây xanh và không khí trong lành',
                imageSrc: '/intro/ticket-2.png',
                theme: 'pink',
            },
        ],
    },
    {
        isReverse: true,
        row: [
            {
                title: 'Vé dịch vụ',
                subTitle: '120k - 380k/vé/người',
                description: 'Vé dịch vụ gồm có các dịch vụ như xe điện, giữ đồ, cho thuê xe đẩy, xe nôi, xe lăn.',
                imageSrc: '/intro/ticket-3.png',
                theme: 'pink',
            },
            {
                title: 'Vé tập thể',
                subTitle: '120k - 380k/vé/người',
                description:
                    'Nhóm bạn, cơ quan đoàn thể, Trường học, công ty du lịch, công nhân, chúng tôi có giá vé tập thể ưu đãi cho Quý cơ quan khi đến tham quan vui chơi tại CVVH Đầm Sen',
                imageSrc: '/intro/ticket-4.png',
                theme: 'green',
            },
        ],
    },
];
const noteContent: string =
    '<ul><li><strong>Giờ bán vé:</strong> 8 giờ 00 - 17 giờ 30</li><li><strong>Vé mua từ cổng:</strong> là vé được bán tại 2 cổng chính số 1A Lạc Long Quân (hoặc số 3 Hòa Bình), cổng số 2 (nhà hàng Thủy Tạ).</li><li><strong>Vé mua trong công viên:</strong> là loại vé được bán tại các quầy trong công viên. Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách.</li><li><strong>Vé từ cổng Công viên nước:</strong>là loại vé bán từ cổng liên thông phía công viên nước. Đây là vé dành cho các du khách vui chơi phía công viên nước, và muốn sang CVVH Đầm Sen.</li><li><strong>&gt;1,4m:</strong> người cao trên 1,4m</li><li><strong>&lt;1,4m:</strong>người cao dưới 1,4m</li><li><strong>Trẻ em dưới 1m được miễn phí</strong> (phải đi cùng với người lớn).</li><li><strong>Có vé mời, được giảm 50% vé trọn gói</strong> (áp dụng mua từ cổng).</li></ul>';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className='section'>
            <figure className={cx('thumbnail')}>
                <img src='/intro/intro-1-1.png' alt='thumbnail' className='thumbnail' />
                <figcaption>
                    Công viên Văn Hóa Đầm Sen với hơn 30 trò chơi, địa điểm check in và nhiều loại thú quý hiếm
                </figcaption>
            </figure>

            <Title level={1} className={cx('title')}>
                Đầm sen <br /> thế giới tuyệt vời
            </Title>

            {articles.map((article, index) => (
                <div key={article.heading} className={cx('section-article')}>
                    <div className={cx('toBack')}>
                        <h2 className={cx('heading-2')}>{article.heading}</h2>
                        <p>{article.description}</p>

                        <ButtonMore color={index % 2 === 0 ? 'green' : 'pink'} />
                    </div>
                    <div className={cx('toFront')}>
                        <figure>
                            <img src={article.imageSrc} alt='' className='' />
                            <figcaption>{article.imageCaption}</figcaption>
                        </figure>
                    </div>
                </div>
            ))}

            <div className={cx('schedule')}>
                <Title level={2}>Thời gian hoạt động</Title>

                <div className={cx('schedule-wrap')}>
                    <div className={cx('schedule-row')}>
                        {schedules.map((schedule, index) => (
                            <div key={'schedule' + index} className={cx('schedule-col')}>
                                <div className={cx('schedule-card')}>
                                    <schedule.IconComponent className={cx('schedule-card-icon')} />
                                    <div className={cx('schedule-card-separate')}></div>
                                    <div>
                                        <h3 className={cx('schedule-card-heading')}>{schedule.heading}</h3>
                                        {schedule.descriptions.map((desc, indexDesc) => (
                                            <p
                                                key={'desc' + indexDesc}
                                                dangerouslySetInnerHTML={{ __html: desc }}
                                                className={cx('schedule-card-description')}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx('ticket')}>
                <Title level={2}>Giá vé</Title>

                {rowTickets.map((item, rowIndex) => (
                    <div
                        key={'ticket-row' + rowIndex}
                        className={cx('ticket-row', { 'ticket-row--reverse': item.isReverse })}
                    >
                        {item.row.map((ticket, ticketIndex) => (
                            <div key={'ticket-col' + ticketIndex} className={cx('ticket-col')}>
                                <div className={cx('ticket-card', `ticket-card--${ticket.theme}`)}>
                                    <div className={cx('ticket-card__left')}>
                                        <div className={cx('ticket-wrap-image')}>
                                            <img src={ticket.imageSrc} alt='' className={cx('ticket-image')} />
                                        </div>
                                    </div>

                                    <div className={cx('ticket-card__right')}>
                                        <div>
                                            <h3 className={cx('ticket-heading')}>{ticket.title}</h3>
                                            <div className={cx('ticket-sub')}>{ticket.subTitle}</div>
                                            <p className={cx('ticket-description')}>{ticket.description}</p>
                                        </div>
                                        <ButtonMore color={ticket.theme} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <h2 className={cx('note-heading')}>CHÚ Ý:</h2>

            <div className={cx('note-content')} dangerouslySetInnerHTML={{ __html: noteContent }}></div>
        </div>
    );
}
export default Introduce;
