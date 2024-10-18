import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleNavigate, ArticleThumbnail, ArticleTitle, CarouselMightYouLike, CarouselThumbnail } from '~components';
import { getAllArticleByCategorySlugNotArticleSlug, getArticleBySlug, IArticleEntity } from '~modules/article';

function Article() {
    const { slug } = useParams();
    const [article, setArticle] = useState<IArticleEntity>();
    const [mightYouLikeList, setMightYouLikeList] = useState<IArticleEntity[]>([]);
    const ignore = useRef<boolean>(false);

    useEffect(() => {
        (async function (value: string) {
            if (!ignore.current) {
                return;
            }

            try {
                const querySnapshot = await getArticleBySlug(value);

                if (!querySnapshot || querySnapshot.empty) {
                    console.log('can not find article with key:', value);
                    return;
                }
                const snapshot = querySnapshot.docs[0];
                if (!snapshot.exists()) {
                    console.log('can not find article with key:', value);
                    return;
                }

                const articleData: IArticleEntity = snapshot.data();
                articleData.id = snapshot.id;

                const mightYouLikeSnapshot = await getAllArticleByCategorySlugNotArticleSlug(
                    articleData.categorySlug!,
                    value,
                );

                setArticle(articleData);
                setMightYouLikeList((prev) =>
                    mightYouLikeSnapshot
                        ? mightYouLikeSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                        : prev,
                );
            } catch (error) {
                console.log(error);
            }
        })(slug || '');

        return () => {
            ignore.current = true;
        };
    }, [slug]);

    return (
        <div className='section'>
            {article?.blocks.map((block) => {
                switch (block.type) {
                    case 'thumbnail':
                        return <ArticleThumbnail key={block.id} {...block.data} />;
                    case 'title':
                        return <ArticleTitle key={block.id} {...block.data} />;
                    case 'text-content':
                        return (
                            <div
                                key={block.id}
                                dangerouslySetInnerHTML={{ __html: block.data.html }}
                                className='text-content'
                            ></div>
                        );
                    case 'carousel-thumbnail':
                        return <CarouselThumbnail key={block.id} {...block.data} />;
                    default:
                        return null;
                }
            })}

            {article && <ArticleNavigate {...article} />}

            <CarouselMightYouLike items={mightYouLikeList} />
        </div>
    );
}

export default Article;
