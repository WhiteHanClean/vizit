import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userActivate = createAsyncThunk('user/activate', async ({ email, password }, { dispatch }) => {
  try {
    const { data } = await axios.post(`https://atlassoft.space/salam/public/api/users/activate?email=${email}&password=${password}`)
    return data
  } catch (e) {
    console.error(e)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    id: '',
    isActivated: false,
    isAdmin: false
  },
  reducers: {
    getAdmin: (state, action) => {
      state.isAdmin = localStorage.getItem('token') === action.payload
    }
  },
  extraReducers: {
    [userActivate.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token)
       return state = {
        token: payload.token,
        id: payload.id,
        isActivated: true
      }
    }
  }
});

export default authSlice.reducer;
export const { getAdmin } = authSlice.actions;
