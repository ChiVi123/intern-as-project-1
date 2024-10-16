export interface IArticleEntity {
    id?: string;
    slug: string;
    title: string;
    thumbnail: string;
    blocks: ArticleBlockType[];
    category?: { name: string; documentPath: string };
    prev: { label: string; value: string };
    next: { label: string; value: string };
}
