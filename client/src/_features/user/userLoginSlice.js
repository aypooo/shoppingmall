import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const loginUser = createAsyncThunk(
    'users/login',
    async (body) => {
        console.log(body)
        const response = axios.post('/api/users/login', body)
        console.log(response.data)
        return response.data
    }
)
const initialState = {
    user: {},
    loading: false,
    loginSuccess: [],
    error: ''
}
const userSlice = createSlice({
    name: 'userLogin',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.loginSuccess = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = String(action.payload)
        })
    }
})
// export const { } = userSlice.actions;
export default userSlice.reducer;