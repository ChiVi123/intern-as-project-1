import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ArrowRightSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 19 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M3.66699 30.3359L15.667 17.0026L3.66699 3.66927'
            stroke='currentColor'
            strokeWidth={6}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ArrowRightIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ArrowRightSvg} {...props} />;
export default ArrowRightIcon;
