import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const MenuSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M4 4L20 20M20 4L4 20'
            stroke='currentColor'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const MenuIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={MenuSvg} {...props} />;
export default MenuIcon;
