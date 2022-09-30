import { configureStore } from '@reduxjs/toolkit'
import userLoginSlice from './_features/user/userLoginSlice'

export const store = configureStore({
    reducer: {
        loginUser: userLoginSlice,
    },
})