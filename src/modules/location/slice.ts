import { createSlice } from '@reduxjs/toolkit';
import { fetchAllLocation } from './async';
import { ILocationEntity } from './entity';

interface ILocalState extends IReduxState {
    data: ILocationEntity[];
}

const initialState: ILocalState = { data: [], status: 'pending' };
const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: (creator) => ({}),
    extraReducers: (builder) => {
        builder.addCase(fetchAllLocation.pending, (state) => {
            state.data = [];
            state.status = 'pending';
        });

        builder.addCase(fetchAllLocation.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.status = 'fulfilled';
        });

        builder.addCase(fetchAllLocation.rejected, (state) => {
            state.data = [];
            state.status = 'rejected';
        });
    },
    selectors: {
        selectLocationState: (state) => state,
    },
});

export const { selectLocationState } = locationSlice.selectors;

export default locationSlice.reducer;
