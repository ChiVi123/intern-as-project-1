import { Card as CardAntd, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import classNames from 'classnames/bind';

import { ButtonMore } from '~components/ButtonMore';
import { getLinkImageFromFirebase } from '~helper/getLinkImage';
import { ClockIcon, TagIcon } from '~icons';

import styles from './card.module.scss';

interface IProps {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    category: string;
    date: string;
    short?: boolean;
    selfCol?: boolean;
}

const cx = classNames.bind(styles);

function Card({ id, imageSrc, title, description, category, date, short, selfCol }: IProps) {
    return (
        <CardAntd
            bordered={false}
            cover={<img src={getLinkImageFromFirebase(imageSrc)} alt='' />}
            className={cx('custom-card', { 'custom-card--short': short, 'card-self-col': selfCol })}
        >
            <Meta
                title={
                    <>
                        <h3>{title}</h3>
                        {short && <span className={cx('small-text', 'small-text--title')}>{date}</span>}
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

                    {short || <ButtonMore type='primary' size='small' />}
                </Flex>
            </div>
        </CardAntd>
    );
}

export default Card;
