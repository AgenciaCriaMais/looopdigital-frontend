import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Estado inicial
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        // Defina os reducers
    },
});

export const { /* ações */ } = homeSlice.actions;
export default homeSlice.reducer;