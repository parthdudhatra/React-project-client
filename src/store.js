import { configureStore } from '@reduxjs/toolkit'
import userSlice from './component/userSlice'

export const store = configureStore({
  reducer: {
    users : userSlice
  },
})