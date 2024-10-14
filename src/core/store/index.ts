import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import locationReducer from '~modules/location/slice';

const store = configureStore({
    reducer: { location: locationReducer },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;
