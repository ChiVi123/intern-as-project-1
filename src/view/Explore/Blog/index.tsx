import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleNavigate, ArticleThumbnail, ArticleTitle, CarouselMightYouLike, CarouselThumbnail } from '~components';

import { articles, mightYouLikeList } from '../data';

function Blog() {
    const { id } = useParams();
    const [article, setArticle] = useState<ArticleType>();

    useEffect(() => {
        const article = articles[id || ''];
        setArticle(article);
    }, [id]);

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
