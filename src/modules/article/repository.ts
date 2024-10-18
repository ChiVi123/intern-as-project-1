import { collection, CollectionReference, getDocs, query, where } from 'firebase/firestore';
import firestore from '~config/firestore';
import { IArticleEntity } from './entity';

export const articleCollection = collection(firestore, 'article') as CollectionReference<IArticleEntity>;

export const getArticleBySlug = async (slug: string) => {
    try {
        const q = query(articleCollection, where('slug', '==', slug));
        return getDocs(q);
    } catch (error) {
        console.log(error);
    }
};
export const getAllArticleByCategorySlugNotArticleSlug = async (categorySlug: string, notArticleSlug: string) => {
    try {
        const q = query(
            articleCollection,
            where('categorySlug', '==', categorySlug),
            where('slug', '!=', notArticleSlug),
        );
        return getDocs(q);
    } catch (error) {
        console.log(error);
    }
};
