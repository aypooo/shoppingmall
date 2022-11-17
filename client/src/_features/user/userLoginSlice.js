import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_SERVER } from '../../Config';

export const loginUser = createAsyncThunk(
    'users/login',
    async (body) => {
        console.log(body)
        const response = await axios.post(`${USER_SERVER}/login`, body)
        console.log(response.data)
        return response.data
    }
)
const initialState = {
    loading: false,
    loginSuccess: false,
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
            console.log(state.loading)
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.loginSuccess = action.payload
            console.log(state.loading)
            console.log(state.loginSuccess)
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = String(action.error)
            console.log(state.error)
        })
    }
})
// export const { } = userSlice.actions;
export default userSlice.reducer;