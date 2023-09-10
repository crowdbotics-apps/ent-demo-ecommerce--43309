import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_entry_list = createAsyncThunk(
  "entries/api_v1_entry_list",
  async payload => {
    const response = await apiService.api_v1_entry_list(payload)
    return response.data
  }
)
export const api_v1_entry_create = createAsyncThunk(
  "entries/api_v1_entry_create",
  async payload => {
    const response = await apiService.api_v1_entry_create(payload)
    return response.data
  }
)
export const api_v1_entry_retrieve = createAsyncThunk(
  "entries/api_v1_entry_retrieve",
  async payload => {
    const response = await apiService.api_v1_entry_retrieve(payload)
    return response.data
  }
)
export const api_v1_entry_update = createAsyncThunk(
  "entries/api_v1_entry_update",
  async payload => {
    const response = await apiService.api_v1_entry_update(payload)
    return response.data
  }
)
export const api_v1_entry_partial_update = createAsyncThunk(
  "entries/api_v1_entry_partial_update",
  async payload => {
    const response = await apiService.api_v1_entry_partial_update(payload)
    return response.data
  }
)
export const api_v1_entry_destroy = createAsyncThunk(
  "entries/api_v1_entry_destroy",
  async payload => {
    const response = await apiService.api_v1_entry_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_entry_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_entry_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_entry_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_entry_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_entry_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_entry_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_entry_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_entry_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_entry_list,
  api_v1_entry_create,
  api_v1_entry_retrieve,
  api_v1_entry_update,
  api_v1_entry_partial_update,
  api_v1_entry_destroy,
  slice: entriesSlice
}
