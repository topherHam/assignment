import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const makeSignup = createAsyncThunk(
    'auth/signup',
    async (newUser, { rejectWithValue }) => {
        try {
            const response = await axios.post(`http://127.0.0.1:3000/signup`, newUser)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const signupSlice = createSlice({
    name: "signup",
    initialState: {
        signup: null,
        status: '',
        errorMessage: ''
    },
    extraReducers: (builder) => {
        builder.addCase(makeSignup.pending, (state, action) => {
            state.status = 'pending'
            state.errorMessage = ''
        })

        builder.addCase(makeSignup.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.token = action.payload
            state.errorMessage = ''
        })

        builder.addCase(makeSignup.rejected, (state, action) => {
            state.status = 'rejected'
            state.errorMessage = action.payload
        })
    },
});


export const selectStatus = (state) => state.signup.status
export const selectData = (state) => state.signup.data
export const selectErrorMessage = (state) => state.signup.errorMessage

export default signupSlice.reducer;
