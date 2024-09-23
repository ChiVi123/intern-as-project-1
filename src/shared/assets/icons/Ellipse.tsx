import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const EllipseSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 8 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx={4} cy='4.5' r={4} fill='currentColor' />
    </svg>
);
const EllipseIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={EllipseSvg} {...props} />;
export default EllipseIcon;
