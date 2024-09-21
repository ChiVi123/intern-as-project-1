import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const FacebookSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.562933 2.69513C0 3.77882 0 5.20255 0 8.05V15.95C0 18.7975 0 20.2212 0.562933 21.3049C1.03731 22.2181 1.78191 22.9627 2.69513 23.4371C3.77882 24 5.20255 24 8.05 24L10 24V15.3333H7.00003V12H10V9.33334C10 6.33334 11.9334 4.66667 14.6667 4.66667C15.5334 4.66667 16.4667 4.8 17.3334 4.93334V8H15.8C14.3334 8 14 8.73334 14 9.66667V12H17.2L16.6667 15.3333H14V24L15.95 24C18.7975 24 20.2212 24 21.3049 23.4371C22.2181 22.9627 22.9627 22.2181 23.4371 21.3049C24 20.2212 24 18.7975 24 15.95V8.05C24 5.20255 24 3.77882 23.4371 2.69513C22.9627 1.78191 22.2181 1.03731 21.3049 0.562933C20.2212 0 18.7975 0 15.95 0H8.05C5.20255 0 3.77882 0 2.69513 0.562933C1.78191 1.03731 1.03731 1.78191 0.562933 2.69513Z'
            fill='currentColor'
        />
    </svg>
);
const FacebookIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={FacebookSvg} {...props} />;
export default FacebookIcon;
