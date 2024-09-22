import classNames from 'classnames/bind';
import styles from './tab-content.module.scss';

type Location = { title: string; contents: { key: string; label: string }[] }[];

interface IProps {
    data: Location;
}

const cx = classNames.bind(styles);

function TabContent({ data }: IProps) {
    return (
        <div className={cx('wrap')}>
            {data.map((item, index) => (
                <div key={'column-' + index}>
                    {Boolean(item.title) && <span className={cx('title')}>{item.title}</span>}
                    <ul>
                        {item.contents.map((content) => (
                            <li key={content.key} className={cx('content-item')}>
                                <span>{content.key}</span>
                                <span>{content.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TabContent;
