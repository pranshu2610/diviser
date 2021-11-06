import { configureStore } from '@reduxjs/toolkit'
import friendReducer from './friendSlice'
import expenseReducer from './expenseSlice'

export const store = configureStore({
  reducer: {
      friends: friendReducer,
      expense: expenseReducer,
  },
})