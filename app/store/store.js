import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/favs'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})