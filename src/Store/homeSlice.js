import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    geners:{},
  },
  reducers: {
   getApiConfigurations: (state,action)=>{
        state.url = action.payload
   },
   getGeners:(state,action)=>{
    state.geners = action.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfigurations, getGeners } = homeSlice.actions

export default homeSlice.reducer