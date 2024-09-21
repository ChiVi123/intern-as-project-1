import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ArrowSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M13 10L19 16L13 22'
            stroke='currentColor'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ArrowIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ArrowSvg} {...props} />;
export default ArrowIcon;
