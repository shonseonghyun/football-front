import axios from "axios";

export const API = axios.create({
    baseURL:"http://localhost:8000",
    withCredentials:true //이걸 넣으니 보인다
})