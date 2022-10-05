import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const registerUser = createAsyncThunk(
    'users/register',
    async (body) => {
        console.log(body)
        const response = await axios.post('/api/users/register', body)
        console.log(response.data)
        return response.data
    }
)
const initialState = {
    loading: false,
    success: false,
    error: ''
}
const userSlice = createSlice({
    name: 'userRegister',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = '';
            console.log(state.loading)
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.succes = action.payload
            console.log(state.loading)
            console.log(state.success)
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = String(action.error)
            console.log(state.error)
        })
    }
})
// export const { } = userSlice.actions;
export default userSlice.reducer;