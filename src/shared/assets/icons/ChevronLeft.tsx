import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ChevronLeftSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M58.3335 29.1641L39.5835 49.9974L58.3335 70.8307'
            stroke='currentColor'
            strokeWidth={6}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ChevronLeftIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ChevronLeftSvg} {...props} />;
export default ChevronLeftIcon;
