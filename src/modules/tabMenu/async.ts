import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppStore } from '~core/store';
import { ITabMenu } from './entity';

export const fetchTabMenu = createAsyncThunk('tabMenu/fetchTabMenu', async (_, { getState }): Promise<ITabMenu[]> => {
    const { categoryTree: categoryTreeState, location: locationState } = getState() as AppStore;

    if (categoryTreeState.status !== 'fulfilled' || locationState.status !== 'fulfilled') {
        return [];
    }

    const tabMenuList: ITabMenu[] = [];

    categoryTreeState.data.forEach((root) => {
        const tabMenu: ITabMenu = { key: root.id!, label: root.name };

        if (root.children) {
            tabMenu.children = root.children.map((child) => ({
                title: child.name,
                content: locationState.data
                    .filter((item) => item.categoryId! === child.id!)
                    .sort((a, b) => Number(a.mark) - Number(b.mark)),
            }));
        } else {
            tabMenu.children = [
                {
                    title: '',
                    content: locationState.data
                        .filter((item) => item.categoryId! === root.id!)
                        .sort((a, b) => Number(a.mark) - Number(b.mark)),
                },
            ];
        }

        tabMenuList.push(tabMenu);
    });

    return tabMenuList;
});
