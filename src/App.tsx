import { Button, ConfigProvider } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import { ArrowNarrowLeftIcon } from '~icons';

function App() {
    return (
        <ConfigProvider
            button={{ className: 'custom-btn' }}
            theme={{
                token: {
                    colorPrimary: '#259E58',
                    colorPrimaryActive: '#005F33',
                    colorPrimaryHover: '#1C7742',
                    // Typography
                    colorText: 'var(--gray-500)',
                    fontFamily: 'var(--font-nunito)',
                    lineHeight: 1.5,
                    lineHeightHeading1: 1.06,
                    lineHeightHeading2: 1.06,
                },
            }}
        >
            <Button type='primary'>KHÁM PHÁ NGAY</Button>
            <Button iconPosition='end' icon={<ArrowNarrowLeftIcon className='rotate-180' />} className='ant-btn--green'>
                Xem thêm
            </Button>
            <Button iconPosition='end' icon={<ArrowNarrowLeftIcon className='rotate-180' />} className='ant-btn--pink'>
                Xem thêm
            </Button>
            <Title>Đầm sen thế giới tuyệt vời</Title>
            <Title level={2}>Các mốc son phát triển</Title>
            <Paragraph className='text-center'>
                Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh (Tàu lượn siêu tốc, vượt thác, Power Surge…); 5
                trò chơi tương tác ảo công nghệ hiện đại; 5 trò chơi thư giãn; 12 trò chơi thiếu nhi; và nhiều trò chơi
                khác.
            </Paragraph>
        </ConfigProvider>
    );
}

export default App;
