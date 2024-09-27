import { ArticleThumbnail, ArticleTitle } from '~components';

const htmlContent: string =
    '<p>Đối với các đoàn khách: Nhóm bạn, cơ quan đoàn thể, Trường học, công ty du lịch, công nhân, chúng tôi có giá vé tập thể ưu đãi cho Quý cơ quan khi đến tham quan vui chơi tại CVVH Đầm Sen . Bên cạnh đó, Quý cơ quan cũng có thể đặt yêu cầu hướng dẫn, tổ chức sự kiện, Team building chúng tôi cũng sẽ đáp ứng đầy đủ.</p><p>Để biết chi tiết về chính sách giá ưu đãi và thực đơn cơm tại CVVH Đầm Sen, Quý khách vui lòng liên hệ với nhân viên phụ trách như sau:</p><ol><li><strong>Công ty Du Lịch/ giáo xứ/ nhóm bạn/ Cơ quan đoàn thể:</strong><ul><li>Mrs. Minh: 0902 575 805</li><li>Mr. Đăng Khánh: 0789 848 418</li></ul></li><li><strong>Trường học:</strong>Mr. Hiếu Trung: 0989 967 129</li><li><strong>Công nhân + sự kiện:</strong><ul><li>Mrs. Minh: 0902 575 805</li><li>Mr. Đăng Khánh: 0789 848 418</li></ul></li><li><strong>Hotline:</strong>(028) 3963 3593 - 0902575805 (Mrs. Minh)</li></ol><h2>ĐẶT TOUR - SỰ KIỆN - TIỆC</h2><p>Phòng Tiếp nhận Tour Đầm Sen</p><ul><li><strong>Địa chỉ:</strong>Cổng 1A, Số 3, Hòa Bình, Phường 3, Quận 11, TP. HCM</li><li><strong>ĐT:</strong>(028) 3963.3593 - (028) 3858 8868</li></ul>';

function Group() {
    return (
        <div className='section'>
            <ArticleThumbnail src='https://firebasestorage.googleapis.com/v0/b/intern-as-project-1.appspot.com/o/ticket%2Fgroup%2Fticket-group.png?alt=media&token=1b28a8d4-cf44-45f5-a5fb-a1efeafdc0e9' />

            <ArticleTitle title='Vé tập thể' description='Đầm Sen là nơi vui chơi yêu thích của các bạn nhỏ.' />

            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='section__text-content'></div>
        </div>
    );
}

export default Group;
