import { configureStore } from '@reduxjs/toolkit'
import friendReducer from './friendSlice'
import expenseReducer from './expenseSlice'
import categoryReducer from './categorySlice'

export const store = configureStore({
  reducer: {
      friends: friendReducer,
      expense: expenseReducer,
      category: categoryReducer,
  },
})