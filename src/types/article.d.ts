interface ITitle {
    id: string;
    type: 'title';
    data: {
        title: string;
        description: string;
        category?: string;
        date?: string;
    };
}

interface IThumbnail {
    id: string;
    type: 'thumbnail';
    data: {
        src: string;
        alt: string;
        caption?: string;
    };
}

interface ITextContent {
    id: string;
    type: 'text-content';
    data: { html: string };
}

interface ICarouselThumbnail {
    id: string;
    type: 'carousel-thumbnail';
    data: {
        widthSlider?: string;
        marginSlider?: string;
        items: {
            id: string;
            imageSrc: string;
            caption: string;
        }[];
    };
}

interface Blog {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    category: string;
    date: string;
}

type ArticleBlockType = ITitle | IThumbnail | ITextContent | ICarouselThumbnail;
type ArticleType = {
    slug: string;
    prev: { label: string; value: string };
    next: { label: string; value: string };
    blocks: ArticleBlockType[];
};

interface IArticleModal {
    id?: string;
    slug: string;
    title: string;
    thumbnail: {
        src: string;
        alt?: string;
        caption?: string;
    };
    blocks: ArticleBlockType[];
    category?: { name: string; documentPath: string };
    /** location: document path */
    location?: string;
    createAt: Date;
}
