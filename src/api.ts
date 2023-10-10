import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkludmlzaWJsZSBIb21lcyBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.vpFgHGWLdpIdxpjp9xobuGIatM-rpkQleN_7Eou9xFw";
const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

let baseURL = "https://localhost:44357/api/property";
if (!development) baseURL = "";

axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

const axiosInst = axios.create({
  baseURL,
});

export default axiosInst;
