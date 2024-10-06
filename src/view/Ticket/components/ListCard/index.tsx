import classNames from 'classnames/bind';
import styles from './list-card.module.scss';
import Card from './type';

interface IProps {
    items: Card[];
    colsBreakPointMd?: 1 | 2;
    size?: 'lg' | 'md';
    isIcon?: boolean;
    isTitle?: boolean;
}

const cx = classNames.bind(styles);

function ListCard({ items, colsBreakPointMd = 1, size = 'md', isIcon, isTitle }: IProps) {
    return (
        <div className={cx('list')}>
            <div className={cx('row')}>
                {items.map((card) => (
                    <div key={'card-info' + card.id} className={cx('item', `item--cols-${colsBreakPointMd}`)}>
                        <div className={cx('card', `card--${card.color}`)}>
                            <div
                                dangerouslySetInnerHTML={{ __html: card.flagContent }}
                                className={cx('flag', { 'flag--icon': isIcon })}
                            ></div>
                            {isTitle && <h2 className={cx('heading')}>{card.heading}</h2>}
                            <div
                                dangerouslySetInnerHTML={{ __html: card.content }}
                                className={cx('content', `content--${size}`)}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListCard;
