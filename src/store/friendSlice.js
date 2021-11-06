import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  friends: [],
}

export const friendSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    updateFriends: (state, action) => {
      state.friends = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateFriends } = friendSlice.actions

export default friendSlice.reducer