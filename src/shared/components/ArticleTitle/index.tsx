import Title from 'antd/es/typography/Title';
import classNames from 'classnames/bind';

import { ClockIcon, TagIcon } from '~icons';
import styles from './article-title.module.scss';

interface IProps {
    title: string;
    description: string;
    category?: string;
    date?: string;
}

const cx = classNames.bind(styles);

function ArticleTitle({ title, description, category, date }: IProps) {
    return (
        <div className={cx('wrap')}>
            <div>
                <Title level={1} role='heading' className={cx('title')}>
                    {title}
                </Title>
                <div className={cx('sub-title')}>
                    {category && (
                        <span className={cx('sub-title-tag')}>
                            <TagIcon /> {category}
                        </span>
                    )}
                    {date && (
                        <span className={cx('sub-title-date')}>
                            <ClockIcon /> {date}
                        </span>
                    )}
                </div>
            </div>
            <div className={cx('description-wrap')}>
                <span className={cx('description-title')}>Mô tả</span>
                <p className={cx('description-content')}>{description}</p>
            </div>
        </div>
    );
}

export default ArticleTitle;
