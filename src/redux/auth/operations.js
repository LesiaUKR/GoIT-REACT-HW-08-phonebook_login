import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk("auth/register", async (user, thunkApi) => {
    try {
        const { data } = await axios.post("/users/signup", user) //отримали відповідь з бекенду з об'єктом даних про user
        token.set(data.token) //записали в заголовки axios token
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
    try {
        const { data } = await axios.post("/users/login", user) //отримали відповідь з бекенду з об'єктом даних про user
        token.set(data.token) //записали в заголовки axios token
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const state = thunkApi.getState()
    const persistedToken = state.auth.token
    if (!persistedToken) {
      return thunkApi.rejectWithValue()
    }
  try {
        token.set(persistedToken)
        const { data } = await axios.get("/users/current") //отримали відповідь з бекенду з об'єктом даних про user
         //записали в заголовки axios token
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
         await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
}
)