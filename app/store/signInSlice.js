import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login:"abc",
  password:"123!@#"
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    signIn: (state) => {
     login= state.value,
     password=state.value 
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment} = signInSlice.actions

export default signInSlice.reducer