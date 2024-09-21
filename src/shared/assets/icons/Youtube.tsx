import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const YoutubeSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 34 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M33.2997 3.75529C32.9076 2.28706 31.7593 1.12941 30.303 0.734118C27.6424 0 16.9999 0 16.9999 0C16.9999 0 6.35747 0 3.69685 0.705882C2.26852 1.10118 1.09225 2.28706 0.700162 3.75529C0 6.43765 0 12 0 12C0 12 0 17.5906 0.700162 20.2447C1.09225 21.7129 2.24052 22.8706 3.69685 23.2659C6.38548 24 16.9999 24 16.9999 24C16.9999 24 27.6424 24 30.303 23.2941C31.7593 22.8988 32.9076 21.7412 33.2997 20.2729C33.9999 17.5906 33.9999 12.0282 33.9999 12.0282C33.9999 12.0282 34.0279 6.43765 33.2997 3.75529ZM13.6543 16.9296L22.5547 11.791L13.6543 6.65234V16.9296Z'
            fill='currentColor'
        />
    </svg>
);
const YoutubeIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={YoutubeSvg} {...props} />;
export default YoutubeIcon;
