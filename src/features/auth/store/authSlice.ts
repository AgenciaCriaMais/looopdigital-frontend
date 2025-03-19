import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Estado inicial
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Defina os reducers
    },
});

export const { /* ações */ } = authSlice.actions;
export default authSlice.reducer;