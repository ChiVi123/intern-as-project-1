import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoryTree } from './async';
import { ICategoryEntity } from './entity';

interface ICategoryTreeState extends IReduxState {
    data: ICategoryEntity[];
}

const initialState: ICategoryTreeState = {
    data: [],
    status: 'pending',
};

const categorySlice = createSlice({
    name: 'categoryTree',
    initialState,
    reducers: (creators) => ({}),
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryTree.pending, (state) => {
            state.data = [];
            state.status = 'pending';
        });

        builder.addCase(fetchCategoryTree.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.status = 'fulfilled';
        });

        builder.addCase(fetchCategoryTree.rejected, (state) => {
            state.data = [];
            state.status = 'rejected';
        });
    },
    selectors: {
        selectCategoryTreeState: (state) => state,
    },
});

export const { selectCategoryTreeState } = categorySlice.selectors;

export default categorySlice.reducer;
