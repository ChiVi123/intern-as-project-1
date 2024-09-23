import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ArrowLeftSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 19 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M15.333 3.66406L3.33301 16.9974L15.333 30.3307'
            stroke='currentColor'
            strokeWidth={6}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ArrowLeftIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ArrowLeftSvg} {...props} />;
export default ArrowLeftIcon;
