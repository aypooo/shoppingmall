import { configureStore } from '@reduxjs/toolkit'
import userLoginSlice from './_features/user/userLoginSlice'
import userRegisterSlice from './_features/user/userRegisterSlice'
export const store = configureStore({
    reducer: {
        loginUser: userLoginSlice,
        resgisterUser: userRegisterSlice
    },
})