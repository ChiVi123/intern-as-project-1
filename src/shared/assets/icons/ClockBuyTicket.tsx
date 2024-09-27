import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ClockBuyTicketSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M29.8958 60.375C14.8167 60.375 2.625 47.4472 2.625 31.5C2.625 15.5528 15.5528 2.625 31.5 2.625C47.4472 2.625 60.375 15.5528 60.375 31.5C60.375 33.8528 60.0542 37.5958 58.7708 39.8417M31.5 15.4583V31.5L41.4458 26.6875'
            stroke='currentColor'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ClockBuyTicketIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ClockBuyTicketSvg} {...props} />
);
export default ClockBuyTicketIcon;
