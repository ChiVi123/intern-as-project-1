import classNames from 'classnames/bind';
import { LocationIcon, MailIcon, PhoneIcon } from '~icons';
import styles from './footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('column')}>
                    <h2 className={cx('heading-2')}>Trực thuộc</h2>
                    <img src='/logo-truc-thuoc.png' alt='logo truc thuoc' className={cx('logo')} />
                </div>

                <div className={cx('column')}>
                    <h2 className={cx('heading-2')}>Liên hệ</h2>
                    <ul className={cx('list')}>
                        <li>
                            <span className={cx('item', 'item--icon')}>
                                <LocationIcon className={cx('icon')} /> 03 Hòa Bình, Phường 3, Quận 11
                            </span>
                        </li>
                        <li>
                            <span className={cx('item', 'item--icon')}>
                                <PhoneIcon className={cx('icon')} />
                                <a href='!#'>0839 632 394</a>
                            </span>
                        </li>
                        <li>
                            <span className={cx('item', 'item--icon')}>
                                <MailIcon className={cx('icon')} />
                                <a href='!#'>phuthotouristquan11@gmail.com</a>
                            </span>
                        </li>
                    </ul>
                    <h2 className={cx('heading-2')}>Giờ mở cửa</h2>
                    <ul className={cx('list', 'list--dot')}>
                        <li>
                            <span className={cx('item')}>
                                Ngày thường:
                                <strong> 8h00 - 18h00</strong>
                                <br /> (bán vé 7h30 - 16h00)
                            </span>
                        </li>
                        <li>
                            <span className={cx('item')}>
                                Cuối tuần + Lễ:
                                <strong> 7h30 - 21h00</strong>
                                <br /> (bán vé từ 7h30 - 19h00)
                            </span>
                        </li>
                        <li>
                            <span className={cx('item')}>
                                Công viên nghỉ <strong>thứ 3</strong>
                                hàng tuần
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={cx('column')}>
                    <h2 className={cx('heading-2')}>Các đơn vị CÙNG hệ thống Phuthotourist</h2>
                    <ul className={cx('list', 'list--dot')}>
                        <li>
                            <span className={cx('item')}>
                                <a href='!#'>Công ty CP DVDL Phú Thọ</a>
                            </span>
                        </li>
                        <li>
                            <span className={cx('item')}>
                                <a href='!#'>Khu du lịch sinh thái Vàm Sát</a>
                            </span>
                        </li>
                        <li>
                            <span className={cx('item')}>
                                <a href='!#'>Khách sạn Ngọc Lan</a>
                            </span>
                        </li>
                        <li>
                            <span className={cx('item')}>
                                <a href='!#'>Khách sạn Phú Thọ</a>
                            </span>
                        </li>
                        <li>
                            <span className={cx('item')}>
                                <a href='!#'>Trung tâm Du lịch Đầm Sen</a>
                            </span>
                        </li>
                        <li>
                            <span className={cx('item')}>
                                <a href='!#'>Cà phê Vườn Đá</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('copyright')}>
                Copyright &copy; Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
            </div>
        </div>
    );
}
export default Footer;
