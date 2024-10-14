import { collection, CollectionReference, getDocs } from 'firebase/firestore';
import firestore from '~config/firestore';

export const categoryCollection = collection(firestore, 'category') as CollectionReference<ICategoryModal>;

export const getAllCategory = async () => {
    return (await getDocs(categoryCollection)).docs;
};
