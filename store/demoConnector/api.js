import axios from "axios"
const demoConnector = axios.create({
  baseURL: "https://cb-kozel.github.io/Data",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function democonnector_get_productfeedjson_list(payload) {
  return demoConnector.get(`/product-feed.json`)
}
export const apiService = { democonnector_get_productfeedjson_list }
