import {
    collection,
    CollectionReference,
    DocumentReference,
    getDocs,
    orderBy,
    OrderByDirection,
    query,
    where,
} from 'firebase/firestore';
import firestore from '~config/firestore';
import { ICategoryEntity } from './entity';

export const categoryCollection = collection(firestore, 'category') as CollectionReference<ICategoryEntity>;

export const getAllRootCategorySortByOrder = async (orderByDirection: OrderByDirection = 'asc') => {
    const q = query(categoryCollection, where('isRoot', '==', true), orderBy('orderCategory', orderByDirection));
    return getDocs(q);
};
export const getAllCategoryByParentSortByOrder = async (
    parent: DocumentReference<ICategoryEntity>,
    orderByDirection: OrderByDirection = 'asc',
) => {
    const q = query(categoryCollection, where('parent', '==', parent), orderBy('orderCategory', orderByDirection));
    return getDocs(q);
};
