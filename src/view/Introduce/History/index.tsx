import styles from './history.module.scss';

import Title from 'antd/es/typography/Title';
import classNames from 'classnames/bind';

import { ArticleTitle } from '~components';

type Service = {
    title: string;
    description: string;
    imgSrc: string;
    color: 'green' | 'pink' | 'blue' | 'orange' | 'seagreen';
};

const services: Service[] = [
    {
        title: 'Trò chơi',
        description:
            'Lịch sử hình thành CVVH gắn liền với sự phát triển hơn 50 trò chơi. Từ thư giãn đến cảm giác mạnh, phân bổ đều khắp khuôn viên Đầm Sen.',
        imgSrc: '/intro/history/img-3.png',
        color: 'green',
    },
    {
        title: 'Sự kiện',
        description:
            'Là nơi tổ chức nhiều kỷ lục Việt Nam như kỷ lục bánh tét, bánh chưng, bánh Noel… Các sự kiện văn hóa lớn như lễ hội: bắn pháo hoa, Cosplay, khinh khí cầu, xe cổ, bắn pháo hoa, Cosplay, khinh khí cầu, xe cổ',
        imgSrc: '/intro/history/img-4.png',
        color: 'blue',
    },
    {
        title: 'Cảnh trí',
        description:
            'Với đủ loại cây xanh, từ bon sai kiểng cổ đến nhiều loài kì hoa dị thảo với các khu vườn xanh mát: Vườn Nam Tú thượng Uyển, Đảo Lan Rừng, Vườn Xương Rồng, Vườn Hoa Châu Âu, Vườn Nam Tú thượng Uyển, Đảo Lan Rừng, Vườn Xương Rồng, Vườn Hoa Châu Âu',
        imgSrc: '/intro/history/img-5.png',
        color: 'pink',
    },
    {
        title: 'Chim thú',
        description:
            'Với đủ loại cây xanh, từ bon sai kiểng cổ đến nhiều loài kì hoa dị thảo với các khu vườn xanh mát: Vườn Nam Tú thượng Uyển, Đảo Lan Rừng, Vườn Xương Rồng, Vườn Hoa Châu Âu…',
        imgSrc: '/intro/history/img-6.png',
        color: 'orange',
    },
    {
        title: 'Ẩm thực',
        description:
            'Được biết đến với nhà hàng Thủy Tạ, và cà phê Vườn Đá. Chuyên phục vụ các món ăn Hoa – Việt, với đội ngũ đầu Bếp kinh nghiệm lâu năm trong ngành.',
        imgSrc: '/intro/history/img-7.png',
        color: 'seagreen',
    },
];
const textContent: string =
    '<p>Lịch sử hình thành CVVH Đầm Sen bắt đầu sau ngày đất nước thống nhất. Lúc bấy giờ, Đầm Sen còn là một khu ruộng hoang đầm lầy. Nơi đó chỉ toàn những đụn rau muống, rau ngổ, cây cỏ rậm rịt. Đồng thời đây cũng là nơi chứa các tệ nạn xã hội. Ngày 15/2/1976, Thành ủy - UBND TP.HCM ra lời kêu gọi “Hãy xây dựng cho thành phố 3 công viên văn hóa lớn, một tại Bình Tiên, một tại Tân Bình và một tại Đầm Sen”. Hàng triệu công nhân lao động đã tham gia. Công viên Đầm Sen được khởi công như thế trên diện tích 55ha. Từ một đầm lầy hôm nào, đã sớm trở thành một hồ nước sạch, với cảnh quan thoáng mát cho người dân thành phố. </p><h2>Các mốc son phát triển</h2> <ul><li>Năm 1977 - 1983: Đầm Sen do Thành Phố quản lý. Sau đó, 8/9/1983 Thành Phố giao cho Quận 11 quản lý (55ha, theo quyết định 325/QĐ-UB).</li><li>Quyết định 215/QĐ-UB ngày 25/5/1984 giao Đầm Sen về các đơn vị: Ban xây dựng nhà đất và công trình quận 11, Xí nghiệp quốc doanh nuôi trồng thủy sản và Công ty ăn uống và dịch vụ tổng hợp quận 11. Do khó khăn chung và thiếu vốn xây dựng. Đầm Sen chỉ đáp ứng được nhu cầu kinh tế là hồ nuôi cá thịt với một số cây rất ít, chưa hình thành là một công viên.</li><li>Năm 1985: Quận 11 ra quyết định 108/QĐ-UB thống nhất giao Đầm Sen cho Công ty Dịch vụ Văn hóa Tổng hợp quận 11 và có đại diện Xí nghiệp nuôi trồng thủy sản để thành lập ban quản lý Đầm Sen.</li><li>Năm 1989: Công ty du lịch quận 11, tức Công ty Dịch vụ Du lịch Phú Thọ ngày nay được giao quản lý Đầm Sen, xí nghiệp nuôi trồng thủy sản giải thể do làm ăn thua lỗ.</li><li>Từ đó CÔNG VIÊN VĂN HÓA ĐẦM SEN, một đơn vị trực thuộc công ty Du lịch Dịch vụ Phú Thọ Quận 11, từ khi đi vào hoạt động là một khu vui chơi giải trí tới nay, đã có những bước phát triễn mạnh mẽ, trở thành một công viên rộng lớn và hiện đại bậc nhất hiện nay ở TP. HCM, trở thành một công viên văn hóa và du lịch đi đầu và thành công nhất trong cả nước. Từ đầu năm 2003, Công Viên Văn Hóa Đầm Sen chính thức là thành viên của Tổng Công Ty Du Lịch Sài Gòn (Saigontourist). Đó là nhờ sự quan tâm tập trung đầu tư và năng động của ban giám đốc công ty Du lịch Phú Thọ, sự quản lý sang suốt của BGĐ và tập thể cán bộ - công nhân viên có tinh thần trách nhiệm và dày dạn kinh nghiệm làm việc.</li></ul><figure><img src="/intro/history/img-2.png" alt="" /></figure>';
const cx = classNames.bind(styles);

function History() {
    return (
        <div className='section'>
            <figure className={cx('thumbnail')}>
                <img src='/intro/history/img-1.png' alt='' />
            </figure>

            <ArticleTitle
                title='Lịch sử hình thành'
                description='Đầm Sen là một trong những điểm bắn pháo hoa trong các sự kiện lớn của cả nước.'
            />

            <div dangerouslySetInnerHTML={{ __html: textContent }} className='section__text-content'></div>

            <div className={cx('separate')}></div>

            <Title level={2} className={cx('heading-2')}>
                Những loại hình dịch vụ trọng tâm
            </Title>

            <div className={cx('service')}>
                <div className={cx('service-row')}>
                    {services.map((service) => (
                        <div key={'service-' + service.title} className={cx('service-col')}>
                            <div className={cx('service-card')}>
                                <img src={service.imgSrc} alt='' className={cx('service-card-img')} />
                                <div className={cx('service-card-content')}>
                                    <h3 className={cx('service-card-title', `service-card-title--${service.color}`)}>
                                        {service.title}
                                    </h3>
                                    <p className={cx('service-card-description')}>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default History;
