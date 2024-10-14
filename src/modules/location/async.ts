import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs } from 'firebase/firestore';
import { ILocationEntity } from './entity';
import { locationCollection } from './repository';

export const fetchAllLocation = createAsyncThunk('location/fetchAllLocation', async () => {
    return (await getDocs(locationCollection)).docs.map((doc) => {
        const { category, ...data } = doc.data();
        return { ...data, id: doc.id } as ILocationEntity;
    });
});
