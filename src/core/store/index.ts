import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import categoryReducer from '~modules/category/slice';
import locationReducer from '~modules/location/slice';
import mapNoticesReducer from '~modules/mapNotices/slice';
import tabMenuReducer from '~modules/tabMenu/slice';

const store = configureStore({
    reducer: {
        location: locationReducer,
        tabMenu: tabMenuReducer,
        categoryTree: categoryReducer,
        mapNotices: mapNoticesReducer,
    },
});

export type AppStore = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;
