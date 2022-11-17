import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_SERVER } from '../../Config';

export const auth = createAsyncThunk(
    'users/auth',
    async () => {
        const response = await axios.get(`${USER_SERVER}/auth`)
        console.log(response.data)
        return response.data
    }
)
const initialState = {
    loading: false,
    userData: '',
    error: ''
}
const userSlice = createSlice({
    name: 'userAuth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(auth.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        builder.addCase(auth.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload
        })
        builder.addCase(auth.rejected, (state, action) => {
            state.loading = false;
            state.error = String(action.error)
        })
    }
})
// export const { } = userSlice.actions;
export default userSlice.reducer;