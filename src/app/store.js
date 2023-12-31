import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../Redux/user/userSlice'

export const store = configureStore({
    reducer: {
        user : userSlice
    },
  }) 