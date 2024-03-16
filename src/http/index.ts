/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import {
  TAddCategorySchema,
  TInvoice,
  TUsersignin,
  TUsersignup,
} from "../types";

export const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL!,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export async function userSignIn(formData: TUsersignin) {
  return await axios.post(
    "/api/auth/login",
    {
      ...formData,
    },
    axiosRequestConfig
  );
}

export async function userSignUp(formData: TUsersignup) {
  return await axios.post(
    "/api/auth/signup",
    {
      ...formData,
    },
    axiosRequestConfig
  );
}

export async function addProduct(formData: any) {
  return await axios.post(
    "/product/addProduct/",
    {
      ...formData,
    },
    axiosRequestConfig
  );
}

export async function addCategory(formData: TAddCategorySchema, auth: string) {
  return await axios.post(
    "/api/user/categories/addCategory",
    {
      ...formData,
    },
    {
      ...axiosRequestConfig,
      headers: {
        Authorization: auth,
      },
    }
  );
}

export async function getAllCategories(auth: string) {
  return await axios.get("/api/user/categories/getAllCategory", {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function updateCategoryById(
  id: string,
  formData: TAddCategorySchema,
  auth: string
) {
  return await axios.put(
    `/api/user/categories/updateCategory?id=${id}`,
    {
      ...formData,
    },
    {
      ...axiosRequestConfig,
      headers: {
        Authorization: auth,
      },
    }
  );
}

export async function addInvoice(formData: TInvoice) {
  return await axios.post(
    "/product/addProduct/",
    {
      ...formData,
    },
    axiosRequestConfig
  );
}
