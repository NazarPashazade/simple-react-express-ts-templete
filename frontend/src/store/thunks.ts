import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../api/axiosInstance';

export interface User {
    id: number,
    name: string,
    email: string,
    role: 'Admin' | 'User' | 'Editor',
    status: 'Active' | 'Inactive' | 'Pending'
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await axiosInstance.get<User[]>('/api/users');
    return response.data;
});

export const getUserById = createAsyncThunk('users/getUserById', async (id:string) => {
    const response = await axiosInstance.get<User>(`/api/users${id}`);
    return response.data;
});

export const addUser = createAsyncThunk('users/addUser', async (user: User) => {
    const response = await axiosInstance.post<User>('/api/users', user);
    return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
    const response = await axiosInstance.put<User>(`/api/users/${user.id}`, user);
    return response.data;
});

export const removeUser = createAsyncThunk('users/removeUser', async (id: number) => {
    await axiosInstance.delete(`/api/users/${id}`);
    return id;
});
