import { DocumentReference } from 'firebase/firestore';

export interface ICategoryEntity {
    id?: string;
    path: string;
    name: string;
    parent?: DocumentReference<ICategoryEntity>;
    children?: ICategoryEntity[];
    isRoot?: boolean;
    orderCategory: number;
}
