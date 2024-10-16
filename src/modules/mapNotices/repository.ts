import { collection, CollectionReference, getDocs, orderBy, query, where } from 'firebase/firestore';
import firestore from '~config/firestore';
import { IMapNoticesEntity } from './entity';

export const mapNoticesCollections = collection(firestore, 'map-notices') as CollectionReference<IMapNoticesEntity>;

export const getAllMapNoticesByGroup = async (group: number) => {
    const q = query(mapNoticesCollections, where('group', '==', group), orderBy('order', 'asc'));
    return getDocs(q);
};
