import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILocationEntity } from './entity';
import { getAllLocation } from './repository';

export const fetchAllLocation = createAsyncThunk('location/fetchAllLocation', async (): Promise<ILocationEntity[]> => {
    const snapshot = await getAllLocation();

    if (snapshot.empty) {
        return [];
    }

    return snapshot.docs.map((doc) => {
        const location = doc.data();
        location.id = doc.id;
        location.categoryId = location.category!.id;
        delete location.category;
        return location;
    });
});
