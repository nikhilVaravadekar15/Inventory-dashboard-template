import axios, { AxiosRequestConfig } from "axios";
import { TAddCategorySchema, TAddProductSchema, TInvoice, TUsersignin, TUsersignup } from "../types";


export const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL!,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
}

// $.api/auth/login
export async function userSignIn(formData: TUsersignin) {
    return await axios.post(
        "/api/auth/login",
        {
            ...formData
        },
        axiosRequestConfig
    )
}

// $.api/auth/signup
export async function userSignUp(formData: TUsersignup) {
    return await axios.post(
        "/api/auth/signup",
        {
            ...formData
        },
        axiosRequestConfig
    )
}

export async function addProduct(formData: TAddProductSchema) {
    return await axios.post(
        "/product/addProduct/",
        {
            ...formData
        },
        axiosRequestConfig
    )
}

export async function addCategory(formData: TAddCategorySchema) {
    return await axios.post(
        "/categories/addCategory/",
        {
            ...formData
        },
        axiosRequestConfig
    )
}

export async function getAllCategories() {
    return await axios.get(
        "/categories/getAllCategory",
        axiosRequestConfig
    )
}

export async function getCategoryById(id: string) {
    return await axios.get(
        `/categories/addCategory?id=${id}`,
        axiosRequestConfig
    )
}


export async function addInvoice(formData: TInvoice) {
    return await axios.post(
        "/product/addProduct/",
        {
            ...formData
        },
        axiosRequestConfig
    )
}
