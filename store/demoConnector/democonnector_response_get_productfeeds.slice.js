import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const democonnector_get_productfeedjson_list = createAsyncThunk(
  "democonnector_response_get_productfeeds/democonnector_get_productfeedjson_list",
  async payload => {
    const response = await apiService.democonnector_get_productfeedjson_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const democonnector_response_get_productfeedsSlice = createSlice({
  name: "democonnector_response_get_productfeeds",
  initialState,
  reducers: {},
  extraReducers: {
    [democonnector_get_productfeedjson_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [democonnector_get_productfeedjson_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [democonnector_get_productfeedjson_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  democonnector_get_productfeedjson_list,
  slice: democonnector_response_get_productfeedsSlice
}
