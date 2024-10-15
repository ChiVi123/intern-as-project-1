import { collection, CollectionReference, DocumentReference, getDocs, query, where } from 'firebase/firestore';
import firestore from '~config/firestore';
import { ICategoryEntity } from '~modules/category';
import { ILocationEntity } from './entity';

export const locationCollection = collection(firestore, 'location') as CollectionReference<ILocationEntity>;

export const getAllLocation = async () => {
    return getDocs(locationCollection);
};
export const getAllLocationByCategory = async (category: DocumentReference<ICategoryEntity>) => {
    const q = query(locationCollection, where('category', '==', category));
    return getDocs(q);
};
