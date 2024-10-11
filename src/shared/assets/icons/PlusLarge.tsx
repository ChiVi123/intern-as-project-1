import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const PlugLargeSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 12H20M12 4V20' stroke='currentColor' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
);
const PlugLargeIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={PlugLargeSvg} {...props} />;
export default PlugLargeIcon;
