import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMyRecipes = createAsyncThunk(
  'recipes/user',
  async (token, { rejectWithValue }) => {
    const response = await axios.get(`http://127.0.0.1:3000/user/recipes`, {
      'Content-Type': 'application/json',
      'x-access-token': token
    })
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data
  }
)

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    data: [],
    statusByName: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyRecipes.pending, (state, action) => {
      state.statusByName = 'pending'
    })

    builder.addCase(getMyRecipes.fulfilled, (state, action) => {
      state.statusByName = 'fulfilled'
      state.data = action.payload
    })

    builder.addCase(getMyRecipes.rejected, (state, action) => {
      state.statusByName = 'rejected'
    })
  },
});

export const selectStatus = (state) => state.recipes.statusByName
export const selectData = (state) => state.recipes.data

export default recipeSlice.reducer;
