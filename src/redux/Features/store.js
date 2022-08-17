import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware , getDefaultMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    users : userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})