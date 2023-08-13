import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const storeUser = createAsyncThunk(
  "storeUser",
  async (data, { rejectWithValue }) => {
    const res = await axios.post("http://127.0.0.1:8000/user/create", data);
    try {
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  const response = await axios.get("http://127.0.0.1:8000/user/data");
  return response.data;
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(storeUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(storeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(storeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
