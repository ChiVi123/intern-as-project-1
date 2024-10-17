import { Col, Row } from 'antd';
import { getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleCard, ArticleTitle } from '~components';
import { articleCollection, IArticleEntity } from '~modules/article';

function Category() {
    const { slug } = useParams();
    const [article, setArticle] = useState<IArticleEntity>();
    const [[card, ...cards], setCards] = useState<IArticleEntity[]>([]);

    useEffect(() => {
        (async (value: string) => {
            const queryArticleList = query(articleCollection, where('slug', '==', value));
            const queryList = query(articleCollection, where('categorySlug', '==', value));
            const queryDocSnapshot = (await getDocs(queryArticleList)).docs[0];
            const snapshot = (await getDocs(queryList)).docs;

            setArticle(queryDocSnapshot.data());
            setCards(snapshot.map((doc) => ({ ...doc.data(), id: doc.id })));
        })(slug || '');
    }, [slug]);

    return (
        <div className='section'>
            {article && (
                <ArticleTitle
                    title={article.title || ''}
                    category={article.category}
                    date={article.date}
                    description=''
                    titleOnly
                />
            )}
            <ArticleCard {...card} only />

            <Row gutter={[24, 24]} style={{ marginTop: 52 }}>
                {cards.map((card) => (
                    <Col key={'list' + card.id} span={24} sm={12} md={8} lg={12} xl={8} xxl={6}>
                        <ArticleCard key={card.id} {...card} />
                    </Col>
                ))}
            </Row>

            <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
                {cards.map((card) => (
                    <Col key={'list' + card.id} span={24} sm={12} md={8} lg={12} xl={8} xxl={6}>
                        <ArticleCard key={card.id} {...card} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Category;
