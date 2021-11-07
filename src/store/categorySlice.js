import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryType: "Misc",
  categoryName: "MyBill"
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.categoryType = action.payload.type;
      state.categoryName = action.payload.name;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCategory } = categorySlice.actions

export default categorySlice.reducer