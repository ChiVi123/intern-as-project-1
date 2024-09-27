import styles from './inside.module.scss';

import classNames from 'classnames/bind';

import { ArticleThumbnail, ArticleTitle } from '~components';
import { CheckIcon, XmarkIcon } from '~icons';

type TicketType = {
    title: string;
    color: 'green' | 'pink' | 'blue';
    list: { type: 'allow' | 'disallow'; label: string }[];
    htmlContent: string;
};

const ticketTypes: TicketType[] = [
    {
        title: 'VÉ THAM QUAN',
        color: 'green',
        list: [
            { type: 'allow', label: 'Tham quan trong ngày' },
            { type: 'disallow', label: 'Bao gồm trò chơi' },
            { type: 'disallow', label: 'Dịch vụ xe điện' },
        ],
        htmlContent:
            '<ul><li><b>Mua từ cổng:</b><ul><li>120.000 VNĐ/người (&gt;1.4m)</li><li>80.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li><li><b>Mua từ cổng Công viên nước:</b><ul><li>180.000 VNĐ/người (&gt;1.4m)</li><li>50.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li></ul>',
    },
    {
        title: 'VÉ TRỌN GÓI',
        color: 'pink',
        list: [
            { type: 'allow', label: 'Tham quan trong ngày' },
            { type: 'allow', label: 'Bao gồm trò chơi' },
            { type: 'disallow', label: 'Thủy cung' },
            { type: 'disallow', label: 'Dịch vụ xe điện' },
        ],
        htmlContent:
            '<ul><li><b>Mua từ cổng:</b><ul><li>260.000 VNĐ/người (&gt;1.4m)</li><li>180.000 VNĐ/người (&lt;1.4m)</li></ul></li><li><b>Mua từ cổng Công viên nước:</b><ul><li>220.000 VNĐ/người (&gt;1.4m)</li><li>150.000 VNĐ/người (&lt;1.4m)</li></ul></li><li><b>Mua trong công viên:</b><ul><li>150.000 VNĐ/người</li></ul></li></ul>',
    },
    {
        title: 'VÉ SILVER',
        color: 'blue',
        list: [
            { type: 'allow', label: 'Tham quan trong ngày' },
            { type: 'allow', label: 'Bao gồm trò chơi' },
            { type: 'allow', label: 'Lối đi riêng' },
            { type: 'disallow', label: 'Thủy cung' },
            { type: 'disallow', label: 'Massage cá' },
            { type: 'disallow', label: 'Dịch vụ xe điện' },
        ],
        htmlContent:
            '<ul><li><b>Mua từ cổng:</b><ul><li>380.000 VNĐ/người (&gt;1.4m)</li><li>240.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li><li><b>Mua từ cổng Công viên nước:</b><ul><li>340.000 VNĐ/người (&gt;1.4m)</li><li>220.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li><li><b>Mua trong công viên:</b><ul><li>280.000 VNĐ/người</li></ul></li></ul>',
    },
];
const noteContent: string =
    '<ul><li><strong>Giờ bán vé:</strong> 8 giờ 00 - 17 giờ 30</li><li><strong>Vé mua từ cổng:</strong> là vé được bán tại 2 cổng chính số 1A Lạc Long Quân (hoặc số 3 Hòa Bình), cổng số 2 (nhà hàng Thủy Tạ).</li><li><strong>Vé mua trong công viên:</strong> là loại vé được bán tại các quầy trong công viên. Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách.</li><li><strong>Vé từ cổng Công viên nước:</strong>là loại vé bán từ cổng liên thông phía công viên nước. Đây là vé dành cho các du khách vui chơi phía công viên nước, và muốn sang CVVH Đầm Sen.</li><li><strong>&gt;1,4m:</strong> người cao trên 1,4m</li><li><strong>&lt;1,4m:</strong>người cao dưới 1,4m</li><li><strong>Trẻ em dưới 1m được miễn phí</strong> (phải đi cùng với người lớn).</li><li><strong>Có vé mời, được giảm 50% vé trọn gói</strong> (áp dụng mua từ cổng).</li></ul>';
const cx = classNames.bind(styles);

function Inside() {
    return (
        <div className='section'>
            <ArticleThumbnail src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/ticket%2Finside-park%2Fticket-inside-park.png?alt=media&token=3f9635bf-11a6-4837-be26-6facaa605c3a' />

            <ArticleTitle
                title='Vé trong công viên'
                description='Đầm Sen là điểm check-in được ưa chuộng của giới trẻ hiện nay.'
            />

            <div className={cx('row')}>
                {ticketTypes.map((ticket) => (
                    <div key={'ticket-type' + ticket.title} className={cx('col')}>
                        <div className={cx('card', `card--${ticket.color}`)}>
                            <button className={cx('button')}>{ticket.title}</button>
                            <ul className={cx('list')}>
                                {ticket.list.map((item) => (
                                    <li key={item.label} className={cx('item', `item--${item.type}`)}>
                                        {item.type === 'allow' ? <CheckIcon /> : <XmarkIcon />}
                                        {item.label}
                                    </li>
                                ))}
                            </ul>

                            <div
                                className={cx('text-content')}
                                dangerouslySetInnerHTML={{ __html: ticket.htmlContent }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className={cx('note-heading')}>CHÚ Ý:</h2>

            <div className={cx('note-content')} dangerouslySetInnerHTML={{ __html: noteContent }}></div>
        </div>
    );
}

export default Inside;
