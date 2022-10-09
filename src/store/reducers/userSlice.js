import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getUser = createAsyncThunk('user/getInfo', async (user, { dispatch }) => {
  try {
    const { data } = await axios.get(`https://atlassoft.space/salam/public/api/users/${user}`);
    return data
  } catch (e) {
    console.error(e)
  }
})

export const getUserTime = createAsyncThunk('user/getTimes', async (user, { dispatch }) => {
  try {
    const { data } = await axios.get(`https://atlassoft.space/salam/public/api/booking/${user}/getTime`);
    return data
  } catch (e) {
    console.error(e)
  }
})

export const bookTime = createAsyncThunk('user/bookTime', async ({ id, time_id, first_name, phone_number }, { dispatch }) => {
  try {
    const { data } = await axios.post(`https://atlassoft.space/salam/public/api/booking/${id}?time_id=${time_id}&name=${first_name}&phone_number=${phone_number}`);
    return data
  } catch (e) {
    console.error(e)
  }
})

export const editUser = createAsyncThunk('user/editUser', async ({ id, data }, { dispatch }) => {
  const formData = new FormData();
  Object.entries(data).forEach(item => {
    formData.append(item[0], item[1])
  })
  console.log(formData.get('logo'))
  try {
    const { data } = await axios.post(`https://atlassoft.space/salam/public/api/users/${id}/update`, formData, {
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    });
    toast.success('Пользователь изменен!')
    return data
  } catch (e) {
    console.error(e)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    times: [],
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [getUserTime.fulfilled]: (state, { payload }) => {
      state.times = payload;
    },
    [bookTime.fulfilled]: (state, { payload }) => {
      toast.success('Успешно забронирован!')
    },
    [bookTime.rejected]: (state, { payload }) => {
      toast.error('Ой, что-то пошло не так =(')
    }
  }
});

export default userSlice.reducer;
