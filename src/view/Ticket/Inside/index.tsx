import styles from './inside.module.scss';

import classNames from 'classnames/bind';

import { ArticleThumbnail, ArticleTitle } from '~components';
import { ListCard } from '../components';
import Card from '../components/ListCard/type';

const cards: Card[] = [
    {
        id: '3c0e60b4-56c6-558d-866c-dce93cf07c84',
        flagContent: 'VÉ THAM QUAN',
        color: 'green',
        content:
            '<p>✔️ Tham quan trong ngày</p><p>❌ <span style="color:var(--gray-300);text-decoration:line-through">Bao gồm trò chơi</span></p><p>❌<span style="color:var(--gray-300);text-decoration:line-through">Dịch vụ xe điện</span></p><ul><li><strong>Mua từ cổng:</strong><ul><li>120.000 VNĐ/người (&gt;1.4m)</li><li>80.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li><li><strong>Mua từ cổng Công viên nước:</strong><ul><li>80.000 VNĐ/người (&gt;1.4m)</li><li>50.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li></ul>',
    },
    {
        id: '0e8b7944-dc70-5bf1-984c-1d5acc82bcf2',
        flagContent: 'VÉ TRỌN GÓI',
        color: 'pink',
        content:
            '<p>✔️ Tham quan trong ngày</p><p>✔️ Bao gồm trò chơi</p><p>❌ <span style="color:var(--gray-300);text-decoration:line-through">Thủy cung</span></p><p>❌ <span style="color:var(--gray-300);text-decoration:line-through">Dịch vụ xe điện</span></p><ul><li><strong>Mua từ cổng:</strong><ul><li>260.000 VNĐ/người (&gt;1.4m)</li><li>180.000 VNĐ/người (&lt;1.4m)</li></ul></li><li><strong>Mua từ cổng Công viên nước:</strong><ul><li>220.000 VNĐ/người (&gt;1.4m)</li><li>150.000 VNĐ/người (&lt;1.4m)</li></ul></li><li><strong>Mua trong công viên:</strong><ul><li>150.000 VNĐ/người</li></ul></li></ul>',
    },
    {
        id: '364bbd24-a883-51fd-901a-64513adae3c1',
        flagContent: 'VÉ SILVER',
        color: 'blue',
        content:
            '<p>✔️ Tham quan trong ngày</p><p>✔️ Bao gồm trò chơi</p><p>✔️ Lối đi riêng</p><p>❌ <span style="color:var(--gray-300);text-decoration:line-through">Thủy cung</span></p><p>❌ <span style="color:var(--gray-300);text-decoration:line-through">Massage cá</span></p><p>❌ <span style="color:var(--gray-300);text-decoration:line-through">Dịch vụ xe điện</span></p><ul><li><strong>Mua từ cổng:</strong><ul><li>380.000 VNĐ/người (&gt;1.4m)</li><li>240.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li><li><strong>Mua từ cổng Công viên nước:</strong><ul><li>340.000 VNĐ/người (&gt;1.4m)</li><li>220.000 VNĐ/trẻ em (&lt;1.4m)</li></ul></li><li><strong>Mua trong công viên:</strong><ul><li>280.000 VNĐ/người</li></ul></li></ul>',
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

            <ListCard items={cards} />

            <h2 className={cx('note-heading')}>CHÚ Ý:</h2>

            <div className={cx('note-content')} dangerouslySetInnerHTML={{ __html: noteContent }}></div>
        </div>
    );
}

export default Inside;
