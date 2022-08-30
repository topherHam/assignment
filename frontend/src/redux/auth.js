import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const makeLogin = createAsyncThunk(
    'auth/login',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`http://127.0.0.1:3000/login`, userCredentials)
            return response.data.accessToken
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)
export const makeLogout = createAsyncThunk(
    'auth/logout',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://127.0.0.1:3000/logout`,{},{headers: {'x-access-token':token}})
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: '',
        status: '',
        errorMessage: ''
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    },
    extraReducers: (builder) => {
        //Login
        builder.addCase(makeLogin.pending, (state, action) => {
            state.status = 'pending'
            state.errorMessage = ''
        })

        builder.addCase(makeLogin.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.token = action.payload
            state.errorMessage = ''
        })

        builder.addCase(makeLogin.rejected, (state, action) => {
            console.log(state, action)
            state.status = 'rejected'
            state.errorMessage = action.payload
        })

        //Logout
        builder.addCase(makeLogout.pending, (state, action) => {
            state.status = 'pending'
            state.errorMessage = ''
        })

        builder.addCase(makeLogout.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.token = ''
            state.errorMessage = ''
            localStorage.clear()
        })

        builder.addCase(makeLogout.rejected, (state, action) => {
            console.log(state, action)
            state.status = 'rejected'
            state.errorMessage = action.payload
        })
    },
});


export const selectStatus = (state) => state.auth.status
export const selectData = (state) => state.auth.token
export const selectErrorMessage = (state) => state.auth.errorMessage

//actions
export const { setToken } = authSlice.actions;

export default authSlice.reducer;
