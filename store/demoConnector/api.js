import axios from "axios"
const demoConnector = axios.create({
  baseURL: "https://cb-kozel.github.io/Data",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
