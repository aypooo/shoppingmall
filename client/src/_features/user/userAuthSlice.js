import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const auth = createAsyncThunk(
    'users/auth',
    async () => {
        const response = await axios.get('/api/users/auth')
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
            console.log(state.loading)
        })
        builder.addCase(auth.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload
            console.log(state.loading)
            console.log(state.userData)
        })
        builder.addCase(auth.rejected, (state, action) => {
            state.loading = false;
            state.error = String(action.error)
            console.log(state.error)
        })
    }
})
// export const { } = userSlice.actions;
export default userSlice.reducer;