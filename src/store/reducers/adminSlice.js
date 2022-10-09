import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getFreeTimes = createAsyncThunk('admin/getTimes', async ({ id, token }, { dispatch }) => {
  try {
    const { data } = await axios.get(`https://atlassoft.space/salam/public/api/time/${id}/getTime?&token=${token}`);
    return data;
  } catch (e) {
    console.error(e)
  }
})

export const createTime = createAsyncThunk('admin/createTime', async ({ id, time, token }, { dispatch }) => {
  try {
    await axios.post(`https://atlassoft.space/salam/public/api/time/${id}/setTime?time=${time}&token=${token}`);
    toast.success('Доступное время создано!')
  } catch (e) {
    console.error(e)
  }
})

export const deleteTime = createAsyncThunk('admin/deleteTime', async ({ time, token }, { dispatch }) => {
  try {
    await axios.delete(`https://atlassoft.space/salam/public/api/time/${time}/deleteTime?token=${token}`);
    toast.success('Доступное время успешно удалено!')
  } catch (e) {
    console.error(e)
  }
})

export const getBooks = createAsyncThunk('admin/getBooks', async ({ id, token }, { dispatch }) => {
  try {
    const { data } = await axios.get(`https://atlassoft.space/salam/public/api/booking/${id}/getBooks?&token=${token}`);
    return data;
  } catch (e) {
    console.error(e)
  }
})

export const deleteBooks = createAsyncThunk('admin/deleteBooks', async ({ id, token }, { dispatch }) => {
  try {
    const { data } = await axios.delete(`https://atlassoft.space/salam/public/api/booking/${id}/deleteBooks?&token=${token}`);
    toast.success('Все брони успешно удалены!')
    return data;
  } catch (e) {
    console.error(e)
  }
})

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    times: [],
    books: []
  },
  extraReducers: {
    [getFreeTimes.fulfilled]: (state, { payload }) => {
      state.times = payload;
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.books = payload;
    }
  }
})

export default adminSlice.reducer;
