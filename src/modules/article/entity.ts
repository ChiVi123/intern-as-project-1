export interface IArticleEntity {
    id?: string;
    slug: string;
    title: string;
    thumbnail: string;
    blocks: ArticleBlockType[];
    category?: string;
    prev: { label: string; value: string };
    next: { label: string; value: string };
    date: string;
    description: string;
}
