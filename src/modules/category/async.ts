import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategoryEntity } from './entity';
import { getAllCategoryByParentSortByOrder, getAllRootCategorySortByOrder } from './repository';

export const fetchCategoryTree = createAsyncThunk('categoryTree', async (): Promise<ICategoryEntity[]> => {
    const snapshotRoot = await getAllRootCategorySortByOrder();
    if (snapshotRoot.empty) {
        return [];
    }

    return snapshotRoot.docs.reduce(async (promisePrev, current) => {
        const prev = await promisePrev;
        const root = current.data();
        const snapshotChildren = await getAllCategoryByParentSortByOrder(current.ref);

        root.id = current.id;

        if (snapshotChildren.empty) {
            return [...prev, root];
        }

        root.children = snapshotChildren.docs.map((doc) => {
            const child = doc.data();
            child.id = doc.id;
            delete child.parent;
            return child;
        });

        return [...prev, root];
    }, Promise.resolve(new Array<ICategoryEntity>()));
});
