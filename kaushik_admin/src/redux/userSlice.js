import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedUser:null
}

export const userSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    login: (state , action) => {
      state.loggedUser = {...action.payload}
    },
    logout: (state) => {
      state.loggedUser = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { login , logout } = userSlice.actions

export default userSlice.reducer