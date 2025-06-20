import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getUserById, getUsers, type User } from './thunks';

const initialState = {
    users: [] as User[],
    user: {},
    loading: false,
    error: null as string | null,
}

// using Thunk middleware to handle async actions

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            })
            .addCase(getUserById.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserById.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch userById';
            })
    },
});

export default usersSlice.reducer;
