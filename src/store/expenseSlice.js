import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expense: [],
}
// Item looks like

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    updateExpense: (state, action) => {
      state.expense = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateExpense } = expenseSlice.actions

export default expenseSlice.reducer