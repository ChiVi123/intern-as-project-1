import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from './type';

const ScheduleOpenSvg = () => (
    <svg width='1em' height='1em' viewBox='0 0 77 77' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M9.625 28.875H67.375M36.575 67.375C32.9813 67.375 14.5012 67.375 13.1286 66.6756C11.9212 66.0604 10.9396 65.0788 10.3244 63.8714C9.625 62.4988 9.625 60.702 9.625 57.1083V26.3083C9.625 22.7147 9.625 20.9178 10.3244 19.5452C10.9396 18.3379 11.9212 17.3562 13.1286 16.741C14.5012 16.0417 16.298 16.0417 19.8917 16.0417H57.1083C60.702 16.0417 62.4988 16.0417 63.8714 16.741C65.0788 17.3562 66.0604 18.3379 66.6756 19.5452C67.375 20.9178 67.375 22.7147 67.375 26.3083V39.1417M22.4583 9.625V16.0417M54.5417 9.625V16.0417M19.25 41.7083H25.6667M19.25 54.5417H25.6667'
            stroke='currentColor'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M55.824 47.8406V57.1091H61.3851M72.5073 57.1091C72.5073 66.3231 65.0379 73.7924 55.824 73.7924C46.61 73.7924 39.1406 66.3231 39.1406 57.1091C39.1406 47.8952 46.61 40.4258 55.824 40.4258C65.0379 40.4258 72.5073 47.8952 72.5073 57.1091Z'
            stroke='currentColor'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
const ScheduleOpenIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={ScheduleOpenSvg} {...props} />;
export default ScheduleOpenIcon;
