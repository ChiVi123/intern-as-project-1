import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ArrowNarrowUpSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M10 16L15.3333 21.3333M10 16L15.3333 10.6666M10 16L25 16'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ArrowNarrowUpIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ArrowNarrowUpSvg} {...props} />
);
export default ArrowNarrowUpIcon;
