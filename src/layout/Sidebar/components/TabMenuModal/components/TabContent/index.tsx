import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ITabMenuContent } from '~modules/tabMenu';
import styles from './tab-content.module.scss';

interface IProps {
    data: ITabMenuContent[];
    onClose: () => void;
}

const cx = classNames.bind(styles);

function TabContent({ data, onClose }: IProps) {
    return (
        <div className={cx('wrap')}>
            {data.map((item, index) => (
                <div key={'column-' + index}>
                    {Boolean(item.title) && <span className={cx('title')}>{item.title}</span>}
                    <ul className={cx('content-list')}>
                        {item.content.map((location) => (
                            <li key={location.id}>
                                <Link
                                    to={
                                        location.isList
                                            ? `/category/${location.articleSlug || ''}`
                                            : `/${location.articleSlug || ''}`
                                    }
                                    className={cx('content-item')}
                                    onClick={onClose}
                                >
                                    <span>{location.mark}</span>
                                    <span>{location.content}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TabContent;
