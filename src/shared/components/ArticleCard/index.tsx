import { Card as CardAntd, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import classNames from 'classnames/bind';

import { ButtonMore } from '~components/ButtonMore';
import { ClockIcon, TagIcon } from '~icons';
import { IArticleEntity } from '~modules/article';

import { Link } from 'react-router-dom';
import styles from './article-card.module.scss';

interface IProps extends IArticleEntity {
    short?: boolean;
    selfCol?: boolean;
    only?: boolean;
}

const cx = classNames.bind(styles);

function Card({ slug, thumbnail, title, description, category, date, short, selfCol, only }: IProps) {
    return (
        <CardAntd
            bordered={false}
            cover={
                <>
                    {only ? (
                        <>
                            <img src={thumbnail} alt='' className={cx('card-only-image')} />
                            <div className={cx('card-only-wrap')}>
                                <h3 className={cx('card-only-heading')}>{title}</h3>
                                <p className={cx('card-only-desc')}>{description}</p>
                                <Flex gap={16}>
                                    <span className={cx('card-only-text')}>
                                        <TagIcon /> {category}
                                    </span>
                                    <span className={cx('card-only-text')}>
                                        <ClockIcon /> {date}
                                    </span>
                                </Flex>
                                <Link to={`/${slug}`}>
                                    <ButtonMore type='primary' size='small' />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <img src={thumbnail} alt='' />
                    )}
                </>
            }
            className={cx('custom-card', {
                'custom-card--short': short,
                'custom-card--only': only,
                'card-self-col': selfCol,
            })}
        >
            {only || (
                <>
                    <Meta
                        title={
                            <>
                                <Link to={`/${slug}`}>
                                    <h3>{title}</h3>
                                </Link>
                                {short && <span className={cx('small-text')}>{date}</span>}
                            </>
                        }
                        description={short || description}
                        className={cx('custom-card-meta', { 'custom-card-meta--short': short })}
                    />
                    <div className={cx('footer')}>
                        <Flex align='center' justify='space-between'>
                            <Flex vertical>
                                <span className={cx('small-text', 'small-text--pink')}>
                                    <TagIcon /> {category}
                                </span>
                                {short || (
                                    <span className={cx('small-text')}>
                                        <ClockIcon /> {date}
                                    </span>
                                )}
                            </Flex>

                            {short || (
                                <Link to={`/${slug}`}>
                                    <ButtonMore type='primary' size='small' />
                                </Link>
                            )}
                        </Flex>
                    </div>
                </>
            )}
        </CardAntd>
    );
}

export default Card;
