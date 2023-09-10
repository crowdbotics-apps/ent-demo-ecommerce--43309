import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_shopping_cart_list = createAsyncThunk(
  "shopping_carts/api_v1_shopping_cart_list",
  async payload => {
    const response = await apiService.api_v1_shopping_cart_list(payload)
    return response.data
  }
)
export const api_v1_shopping_cart_create = createAsyncThunk(
  "shopping_carts/api_v1_shopping_cart_create",
  async payload => {
    const response = await apiService.api_v1_shopping_cart_create(payload)
    return response.data
  }
)
export const api_v1_shopping_cart_retrieve = createAsyncThunk(
  "shopping_carts/api_v1_shopping_cart_retrieve",
  async payload => {
    const response = await apiService.api_v1_shopping_cart_retrieve(payload)
    return response.data
  }
)
export const api_v1_shopping_cart_update = createAsyncThunk(
  "shopping_carts/api_v1_shopping_cart_update",
  async payload => {
    const response = await apiService.api_v1_shopping_cart_update(payload)
    return response.data
  }
)
export const api_v1_shopping_cart_partial_update = createAsyncThunk(
  "shopping_carts/api_v1_shopping_cart_partial_update",
  async payload => {
    const response = await apiService.api_v1_shopping_cart_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_shopping_cart_destroy = createAsyncThunk(
  "shopping_carts/api_v1_shopping_cart_destroy",
  async payload => {
    const response = await apiService.api_v1_shopping_cart_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const shopping_cartsSlice = createSlice({
  name: "shopping_carts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_shopping_cart_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_shopping_cart_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_shopping_cart_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_shopping_cart_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_shopping_cart_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_shopping_cart_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_shopping_cart_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_shopping_cart_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_shopping_cart_list,
  api_v1_shopping_cart_create,
  api_v1_shopping_cart_retrieve,
  api_v1_shopping_cart_update,
  api_v1_shopping_cart_partial_update,
  api_v1_shopping_cart_destroy,
  slice: shopping_cartsSlice
}
