import { createSlice } from '@reduxjs/toolkit';
import { fetchMapNotices } from './async';
import { IMapNoticesEntity } from './entity';

interface IMapNoticesState extends IReduxState {
    data: IMapNoticesEntity[][];
}

const initialState: IMapNoticesState = {
    data: [],
    status: 'pending',
};

const mapNoticesSlice = createSlice({
    name: 'mapNotices',
    initialState,
    reducers: (creators) => ({}),
    extraReducers: (builder) => {
        builder.addCase(fetchMapNotices.pending, (state) => {
            state.data = [];
            state.status = 'pending';
        });
        builder.addCase(fetchMapNotices.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchMapNotices.rejected, (state) => {
            state.data = [];
            state.status = 'rejected';
        });
    },
    selectors: {
        selectMapNoticeState: (state) => state,
    },
});

export const { selectMapNoticeState } = mapNoticesSlice.selectors;

export default mapNoticesSlice.reducer;
