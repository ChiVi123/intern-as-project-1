import { Button } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import { ButtonMore } from '~components';

function Home() {
    return (
        <>
            <Button type='primary'>KHÁM PHÁ NGAY</Button>

            <ButtonMore />
            <ButtonMore color='pink' />

            <Title>Đầm sen thế giới tuyệt vời</Title>
            <Title level={2}>Các mốc son phát triển</Title>
            <Paragraph className='text-center'>
                Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh (Tàu lượn siêu tốc, vượt thác, Power Surge…); 5
                trò chơi tương tác ảo công nghệ hiện đại; 5 trò chơi thư giãn; 12 trò chơi thiếu nhi; và nhiều trò chơi
                khác.
            </Paragraph>
        </>
    );
}

export default Home;
