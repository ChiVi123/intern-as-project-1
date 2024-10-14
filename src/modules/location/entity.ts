import { DocumentReference } from 'firebase/firestore';
import { ICategoryEntity } from '~modules/category';

export interface ILocationEntity {
    id?: string;
    mark: string;
    title: string;
    content: string;
    isList?: boolean;
    category?: DocumentReference<ICategoryEntity>;
    position: { top: string; left: string };
}
