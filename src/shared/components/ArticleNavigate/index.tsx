import classNames from 'classnames/bind';
import { ArrowNarrowLeftIcon } from '~icons';
import styles from './article-navigate.module.scss';

const cx = classNames.bind(styles);

interface IProps {
    prev: { label: string; value: string };
    next: { label: string; value: string };
}

function ArticleNavigate({ next, prev }: IProps) {
    return (
        <div className={cx('wrapper')}>
            <a href={prev.value} className={cx('link')}>
                <ArrowNarrowLeftIcon />
                {prev.label}
            </a>
            <a href={next.value} className={cx('link')}>
                {next.label}
                <ArrowNarrowLeftIcon className='rotate-180' />
            </a>
        </div>
    );
}

export default ArticleNavigate;
