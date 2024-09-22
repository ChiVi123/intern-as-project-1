import { Button, ConfigProvider, Layout, Modal, Tabs, TabsProps } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { FacebookIcon, InstagramIcon, MenuIcon, XmarkLargeIcon, YoutubeIcon } from '~icons';
import Navbar from '~layout/Navbar';

import { TabContent } from './components';

import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);

const tabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'Trò chơi',
        children: (
            <TabContent
                data={[
                    {
                        title: 'CẢM GIÁC MẠNH',
                        contents: [
                            { key: '01', label: 'Cá Chép Nhào Lộn' },
                            { key: '02', label: 'Lâu Đài Kinh Dị' },
                            { key: '03', label: 'Phượng Hoàng Bay' },
                            { key: '04', label: 'Spinning Coaster' },
                            { key: '05', label: 'Xe Bay Ảo Tưởng' },
                            { key: '06', label: 'Thảm Bay' },
                            { key: '07', label: 'Vòng Quay Thần Tốc' },
                            { key: '08', label: 'Power Surge' },
                            { key: '09', label: 'Tàu Vượt Thác' },
                            { key: '10', label: 'Roller Coaster' },
                            { key: '11', label: 'Vòng Xoay Không Gian' },
                            { key: '12', label: 'Đấu Trường Bò Tót' },
                            { key: '13', label: 'Xe Điện Đụng' },
                        ],
                    },
                    {
                        title: 'TƯƠNG TÁC ẢO',
                        contents: [
                            { key: '14', label: 'Xem Phim Cinemax 8D' },
                            { key: '15', label: 'Đua Xe Turbo Racing' },
                            { key: '16', label: '9D Virtual Reality' },
                            { key: '17', label: 'Bắn Súng Run Raider' },
                            { key: '18', label: 'Lâu Đài Kỳ Thú' },
                        ],
                    },
                    {
                        title: 'GIẢI TRÍ',
                        contents: [
                            { key: '19', label: 'Băng Đăng' },
                            { key: '20', label: 'Đu Quay Đứng Ferris Wheel' },
                            { key: '21', label: 'Monorail' },
                            { key: '22', label: 'Đạp Vịt Pedalo' },
                            { key: '62', label: 'Massage Cá' },
                        ],
                    },
                    {
                        title: 'THIẾU NHI',
                        contents: [
                            { key: '23', label: 'Ếch Nhảy' },
                            { key: '24', label: 'Điệu Nhảy Thiên Thần' },
                            { key: '25', label: 'Khinh Khí Cầu Bay' },
                            { key: '26', label: 'Hải Cẩu Vượt Thác' },
                            { key: '27', label: 'Ngựa Bay' },
                            { key: '28', label: 'Kids Playground' },
                            { key: '29', label: 'Khủng Long Bay' },
                            { key: '30', label: 'Siêu Nhân Robot' },
                            { key: '31', label: 'Rồng Lượn' },
                            { key: '32', label: 'Vòng Lượn Tuổi Thơ' },
                            { key: '33', label: 'Pháo Đài Bay' },
                            { key: '34', label: 'Nhà Hơi Liên Hoàn' },
                        ],
                    },
                ]}
            />
        ),
    },
    {
        key: '2',
        label: 'Vườn thú',
        children: (
            <TabContent
                data={[
                    {
                        title: '',
                        contents: [
                            { key: '35', label: 'Khỉ Đuôi Dài' },
                            { key: '36', label: 'Gấu Ngựa' },
                            { key: '37', label: 'Đười Ươi Sumatra' },
                        ],
                    },
                    {
                        title: '',
                        contents: [
                            { key: '14', label: 'Hà Mã Châu Phi' },
                            { key: '15', label: 'Voi Châu Á' },
                            { key: '16', label: 'Vượn Đen Má Vàng' },
                        ],
                    },
                    {
                        title: '',
                        contents: [
                            { key: '19', label: 'Thủy Cung' },
                            { key: '20', label: 'Vườn Chim' },
                            { key: '21', label: 'Hồ Cá Hải Tượng' },
                        ],
                    },
                    {
                        title: '',
                        contents: [
                            { key: '23', label: 'Cá Hỏa Tiễn' },
                            { key: '24', label: 'Dê Núi' },
                        ],
                    },
                ]}
            />
        ),
    },
    {
        key: '3',
        label: 'Cảnh đẹp',
        children: (
            <TabContent
                data={[
                    {
                        title: '',
                        contents: [
                            { key: '46', label: 'Nam Tú Thượng Uyển' },
                            { key: '47', label: 'Đảo Lan Rừng' },
                            { key: '48', label: 'Vườn Nhật Bản' },
                            { key: '49', label: 'Vườn Xương Rồng' },
                            { key: '50', label: 'Địa Điểm Sống Ảo' },
                        ],
                    },
                    {
                        title: '',
                        contents: [
                            { key: '51', label: 'Quảng Trường Vua Hùng' },
                            { key: '52', label: 'Quảng Trường Âu Lạc' },
                            { key: '53', label: 'Quảng Trường La Mã' },
                            { key: '54', label: 'Cầu Cửu Khúc' },
                        ],
                    },
                ]}
            />
        ),
    },
    {
        key: '4',
        label: 'Sân khấu',
        children: (
            <TabContent
                data={[
                    {
                        title: '',
                        contents: [
                            { key: '55', label: 'Sân Khấu Dế Mèn' },
                            { key: '56', label: 'Rạp Xiếc Thú' },
                            { key: '57', label: 'Sân Khấu Ngôi Sao' },
                        ],
                    },
                ]}
            />
        ),
    },
    {
        key: '5',
        label: 'Giáo dục trải nghiệm',
        children: (
            <TabContent
                data={[
                    {
                        title: '',
                        contents: [
                            { key: '58', label: 'Nhà Trưng Bày Tiêu Bản Động Vật' },
                            { key: '59', label: 'Thực Vật' },
                        ],
                    },
                ]}
            />
        ),
    },
    {
        key: '6',
        label: 'Ẩm thực',
        children: (
            <TabContent
                data={[
                    {
                        title: '',
                        contents: [
                            { key: '60', label: 'Nhà Hàng Thủy Tạ' },
                            { key: '61', label: 'Cà Phê Vườn Đá' },
                            { key: '63', label: 'Damsen Plaza' },
                        ],
                    },
                ]}
            />
        ),
    },
];

function Sidebar() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleOpen = () => setModalOpen((prev) => !prev);

    return (
        <Layout.Sider width={257} className='custom-sider'>
            <div className={cx('modal-wrapper')}>
                <Button className={cx('modal-btn')} onClick={handleOpen}>
                    {modalOpen ? (
                        <MenuIcon className={cx('modal-icon')} />
                    ) : (
                        <XmarkLargeIcon className={cx('modal-icon')} />
                    )}
                </Button>

                <Modal
                    width='auto'
                    open={modalOpen}
                    closeIcon={null}
                    footer={null}
                    mask={false}
                    classNames={{
                        wrapper: 'custom-sider-modal-wrap',
                        content: 'custom-sider-modal-content',
                        body: 'custom-sider-modal-body',
                    }}
                >
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    horizontalItemGutter: 0,
                                    itemColor: '#67776F',
                                    itemHoverColor: '#67776F',
                                    itemSelectedColor: 'var(--pink-500)',
                                    inkBarColor: 'var(--pink-500)',
                                },
                            },
                        }}
                    >
                        <Tabs items={tabs} className='custom-sider-tabs' />
                    </ConfigProvider>
                </Modal>
            </div>

            <Navbar />

            <div>
                <img src='/logo-with-text.png' alt='logo' className={cx('logo')} />
            </div>

            <div className={cx('separate')}></div>

            <div className={cx('socials')}>
                <FacebookIcon className={cx('socials-icon')} />
                <YoutubeIcon className={cx('socials-youtube')} />
                <InstagramIcon className={cx('socials-icon')} />
            </div>
        </Layout.Sider>
    );
}

export default Sidebar;
