import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const MinusSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M6 12L18 12' stroke='currentColor' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
);
const MinusIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={MinusSvg} {...props} />;
export default MinusIcon;
