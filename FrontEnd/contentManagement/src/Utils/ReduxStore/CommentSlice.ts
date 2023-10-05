import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Content } from "../Models/ModelInterface";
import { CommentAPI } from "../API/Api";
import { StatusCode } from "../StaticFunc";

type updateParams = {
  item: string;
  id: string;
};
// Define a type for the slice state
interface CommentState {
  value: Content[];
  loading: boolean;
  error: string | undefined;
  deleteStatus: string;
}

export const fetchAllComments = createAsyncThunk(
  "comment/fetchAllComments",
  async (_, _thunkAPI) => {
    const response = await CommentAPI.getComments();
    return response;
  }
);

export const addComment = createAsyncThunk(
  "comment/addComment",
  async (item: string, _thunkAPI) => {
    const response = await CommentAPI.createComment(item);
    return response;
  }
);

export const updateComment = createAsyncThunk(
  "comment/updateComment",
  async (params: updateParams, _thunkAPI) => {
    const response = await CommentAPI.updateComment(params.item, params.id);
    return response;
  }
);

export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (id: string, _thunkAPI) => {
    return await CommentAPI.deleteComment(id);
  }
);

// Define the initial state using that type
const initialState: CommentState = {
  value: [],
  loading: false,
  error: "",
  deleteStatus: StatusCode.IDLE,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    modifyStatusforDelete: (state) => {
      state.deleteStatus = StatusCode.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllComments.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllComments.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
        state.deleteStatus = StatusCode.SUCCESS;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.deleteStatus = StatusCode.FAILED;
      })
      .addCase(addComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.value.push(action.payload);
        state.loading = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.value.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          } else {
            return item;
          }
        });
        state.loading = false;
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { modifyStatusforDelete } = commentSlice.actions;

export default commentSlice.reducer;
