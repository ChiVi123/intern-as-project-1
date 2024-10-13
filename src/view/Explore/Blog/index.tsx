import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleNavigate, ArticleThumbnail, ArticleTitle, CarouselMightYouLike, CarouselThumbnail } from '~components';
import { getArticleBySlug, IArticleEntity } from '~modules/article';

import { mightYouLikeList } from '../data';

function Blog() {
    const { slug } = useParams();
    const [article, setArticle] = useState<IArticleEntity>();

    useEffect(() => {
        (async function (value: string) {
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

                setArticle({ id: snapshot.id, ...snapshot.data() });
            } catch (error) {
                console.log(error);
            }
        })(slug || '');
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

export default Blog;
