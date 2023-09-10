import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_shopping_cart_items_list = createAsyncThunk("shopping_cart_items/api_v1_shopping_cart_items_list", async payload => {
  const response = await apiService.api_v1_shopping_cart_items_list(payload);
  return response.data;
});
export const api_v1_shopping_cart_items_create = createAsyncThunk("shopping_cart_items/api_v1_shopping_cart_items_create", async payload => {
  const response = await apiService.api_v1_shopping_cart_items_create(payload);
  return response.data;
});
export const api_v1_shopping_cart_items_retrieve = createAsyncThunk("shopping_cart_items/api_v1_shopping_cart_items_retrieve", async payload => {
  const response = await apiService.api_v1_shopping_cart_items_retrieve(payload);
  return response.data;
});
export const api_v1_shopping_cart_items_update = createAsyncThunk("shopping_cart_items/api_v1_shopping_cart_items_update", async payload => {
  const response = await apiService.api_v1_shopping_cart_items_update(payload);
  return response.data;
});
export const api_v1_shopping_cart_items_partial_update = createAsyncThunk("shopping_cart_items/api_v1_shopping_cart_items_partial_update", async payload => {
  const response = await apiService.api_v1_shopping_cart_items_partial_update(payload);
  return response.data;
});
export const api_v1_shopping_cart_items_destroy = createAsyncThunk("shopping_cart_items/api_v1_shopping_cart_items_destroy", async payload => {
  const response = await apiService.api_v1_shopping_cart_items_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const shopping_cart_itemsSlice = createSlice({
  name: "shopping_cart_items",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_shopping_cart_items_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_shopping_cart_items_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_shopping_cart_items_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_shopping_cart_items_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_shopping_cart_items_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_shopping_cart_items_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_shopping_cart_items_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_shopping_cart_items_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_shopping_cart_items_list,
  api_v1_shopping_cart_items_create,
  api_v1_shopping_cart_items_retrieve,
  api_v1_shopping_cart_items_update,
  api_v1_shopping_cart_items_partial_update,
  api_v1_shopping_cart_items_destroy,
  slice: shopping_cart_itemsSlice
};