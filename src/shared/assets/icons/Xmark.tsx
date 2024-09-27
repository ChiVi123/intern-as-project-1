import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const XmarkSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M6.5 6L18.5 18M18.5 6L6.5 18'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const XmarkIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={XmarkSvg} {...props} />;
export default XmarkIcon;
