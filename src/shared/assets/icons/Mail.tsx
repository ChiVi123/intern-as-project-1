import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const MailSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z'
            fill='currentColor'
        />
        <path
            d='M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5'
            stroke='#259e58'
            strokeWidth='1.5'
            strokeMiterlimit={10}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const MailIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={MailSvg} {...props} />;
export default MailIcon;
