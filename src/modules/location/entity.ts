import { DocumentReference } from 'firebase/firestore';
import { ICategoryEntity } from '~modules/category';

export interface ILocationEntity {
    id?: string;
    mark: string;
    title: string;
    content: string;
    isList?: boolean;
    articleSlug?: string;
    category?: DocumentReference<ICategoryEntity>;
    categoryId?: string;
    position: { top: string; left: string };
}
