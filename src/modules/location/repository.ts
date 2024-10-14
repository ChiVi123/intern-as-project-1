import { collection, CollectionReference, getDocs, orderBy, OrderByDirection, query, where } from 'firebase/firestore';
import firestore from '~config/firestore';

export const locationCollection = collection(firestore, 'location') as CollectionReference<ILocationModal>;

export const getAllLocation = async () => {
    return (await getDocs(locationCollection)).docs;
};
export const getAllLocationSortByMark = async (directionStr: OrderByDirection = 'asc') => {
    const q = query(locationCollection, where('mark', 'in', ['60', '61', '63']), orderBy('mark', directionStr));
    return (await getDocs(q)).docs;
};
