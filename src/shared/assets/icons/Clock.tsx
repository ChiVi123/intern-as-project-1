import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ClockSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M10 5.83333V10L12.0833 11.25M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ClockIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ClockSvg} {...props} />;
export default ClockIcon;
