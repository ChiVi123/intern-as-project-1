import Title from 'antd/es/typography/Title';
import classNames from 'classnames/bind';

import styles from './article-title.module.scss';

interface IProps {
    title: string;
    description: string;
}

const cx = classNames.bind(styles);

function ArticleTitle({ title, description }: IProps) {
    return (
        <div className={cx('wrap')}>
            <Title level={1} role='heading' className={cx('title')}>
                {title}
            </Title>
            <div className={cx('description-wrap')}>
                <span className={cx('description-title')}>Mô tả</span>
                <p className={cx('description-content')}>{description}</p>
            </div>
        </div>
    );
}

export default ArticleTitle;
