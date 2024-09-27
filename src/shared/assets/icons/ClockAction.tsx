import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ClockActionSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 63 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M29.9995 59C14.9203 59 2.94531 47.4472 2.94531 31.5C2.94531 15.5528 15.8731 2.625 31.8203 2.625C47.7675 2.625 60.6953 15.5528 60.6953 31.5C60.6953 33.8528 60.3745 35.35 60.0536 36.6333M31.8203 15.4583V31.5L41.7661 26.6875'
            stroke='currentColor'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ClockActionIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ClockActionSvg} {...props} />;
export default ClockActionIcon;
