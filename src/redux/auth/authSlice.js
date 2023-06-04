import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");
const { register, login, refreshUser, logout } = require("./operations");

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {
        [register.fulfilled](state, action) {
            console.log(action)
            state.user = action.payload.user //записали в стейт об'єкт з даними user
            state.token = action.payload.token //записали в стейт user token
            state.isLoggedIn = true
        },
         [login.fulfilled](state, action) {
            state.user = action.payload.user //записали в стейт об'єкт з даними user
            state.token = action.payload.token //записали в стейт user token
            state.isLoggedIn = true
        },
             [refreshUser.pending](state) {
            state.isRefreshing = true
        },
             [refreshUser.fulfilled](state, action) {
                 state.user = action.payload//записали в стейт об'єкт з даними user
                 state.isLoggedIn = true
                 state.isRefreshing = false
        },
                [refreshUser.rejected](state) {
            state.isRefreshing = false
        },
                 [logout.fulfilled](state, action) {
                 state.user = {name: null, email: null,}
                 state.isLoggedIn = false
             toast.success('Goodbye')
        },
    }
})

export const authReducer = authSlice.reducer;