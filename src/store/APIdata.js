import axios from "axios";

export async function APIstoreData() {
  const res = await axios.get("api/products");
  const data = res.data;
  return data;
}
