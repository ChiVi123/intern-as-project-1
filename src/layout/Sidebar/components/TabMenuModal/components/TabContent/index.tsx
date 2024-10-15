import classNames from 'classnames/bind';
import { ITabMenuContent } from '~modules/tabMenu';
import styles from './tab-content.module.scss';

interface IProps {
    data: ITabMenuContent[];
}

const cx = classNames.bind(styles);

function TabContent({ data }: IProps) {
    return (
        <div className={cx('wrap')}>
            {data.map((item, index) => (
                <div key={'column-' + index}>
                    {Boolean(item.title) && <span className={cx('title')}>{item.title}</span>}
                    <ul>
                        {item.content.map((content) => (
                            <li key={content.id} className={cx('content-item')}>
                                <span>{content.mark}</span>
                                <span>{content.content}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TabContent;
