import { createSlice } from '@reduxjs/toolkit';
import { fetchTabMenu } from './async';
import { ITabMenu } from './entity';

interface ITabMenuState extends IReduxState {
    data: ITabMenu[];
}

const initialState: ITabMenuState = { data: [], status: 'pending' };

const tabMenuSlice = createSlice({
    name: 'tabMenu',
    initialState,
    reducers: (creators) => ({}),
    extraReducers: (builder) => {
        builder.addCase(fetchTabMenu.pending, (state) => {
            state.data = [];
            state.status = 'pending';
        });
        builder.addCase(fetchTabMenu.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchTabMenu.rejected, (state) => {
            state.data = [];
            state.status = 'rejected';
        });
    },
    selectors: {
        selectTabMenuState: (state) => state,
    },
});

export const { selectTabMenuState } = tabMenuSlice.selectors;

export default tabMenuSlice.reducer;
