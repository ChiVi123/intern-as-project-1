import classNames from 'classnames/bind';
import styles from './article-thumbnail.module.scss';

interface IProps {
    src: string;
    alt?: string;
    caption?: string;
}

const cx = classNames.bind(styles);

function ArticleThumbnail({ src, alt, caption }: IProps) {
    return (
        <figure className={cx('wrap')}>
            <img src={src} alt={alt} />
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}

export default ArticleThumbnail;
