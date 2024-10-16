import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ITabMenuContent } from '~modules/tabMenu';

import { Fragment } from 'react/jsx-runtime';
import styles from './tab-content-mobile.module.scss';

interface IProps {
    data: ITabMenuContent[];
}

const cx = classNames.bind(styles);

function TabContentMobile({ data }: IProps) {
    return (
        <Fragment>
            {data.map((item, index) => (
                <Fragment key={'column-' + index}>
                    {Boolean(item.title) && <div className={cx('title')}>{item.title}</div>}
                    <ul className={cx('content-list')}>
                        {item.content.map((location) => (
                            <li key={location.id}>
                                <Link to={location.articleSlug || ''} className={cx('content-item')}>
                                    <span>{location.mark}</span>
                                    <span>{location.content}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            ))}
        </Fragment>
    );
}

export default TabContentMobile;
