import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const CheckSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M4.5 12.6111L9.42308 17.5L20.5 6.5'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const CheckIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={CheckSvg} {...props} />;
export default CheckIcon;
