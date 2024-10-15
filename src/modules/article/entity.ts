export interface IArticleEntity {
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
    prev: { label: string; value: string };
    next: { label: string; value: string };
}
