import { AxiosInstance } from "./axiosInstance/AxiosInstance";

export const FetchProduct = () => {
    return AxiosInstance.get('/menus')
}