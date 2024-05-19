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

// ######################## Auth ########################

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

// ######################## Products ########################

export async function getAllProducts(auth: string) {
  return await axios.get("api/user/products/allProducts", {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function addProduct(formData: any, auth: string) {
  return await axios.post(
    "api/user/products/addProduct",
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

export async function getProductDetailsById(id: string, auth: string) {
  return await axios.get(`/api/user/products/getProduct?id=${id}`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function updateProductDetails(
  id: string,
  formData: any,
  auth: string
) {
  return await axios.put(
    `/api/user/products/updateProduct?id=${id}`,
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

// ######################## Category ########################

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

// ######################## search ########################
export async function getAllProductsByName(name: string, auth: string) {
  return await axios.get(`api/user/products/byName?name=${name}`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getAllProductsByCategory(name: string, auth: string) {
  return await axios.get(`api/user/products/byCategory?category=${name}`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getAllProductsByBatch(name: string, auth: string) {
  return await axios.get(`api/user/products/batchNo?batch=${name}`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getAllActiveProducts(auth: string) {
  return await axios.get(`api/user/products/allProductsActive`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getAllInactiveProducts(auth: string) {
  return await axios.get(`api/user/products/allProductsInactive`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

// ######################## dashboard ########################

export async function getTodaysProfit(auth: string) {
  return await axios.get("/api/user/sales/todayProfit", {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getTodaysLoss(auth: string) {
  return await axios.get("/api/user/sales/todayLoss", {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getTodaysInvoicesCount(auth: string) {
  return await axios.get("/api/user/invoice/todayInvoices", {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getYearlyProfit(year: number, auth: string) {
  return await axios.get(`/api/admin/sales/yearlyProfit?year=${year}`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getYearlyLoss(year: number, auth: string) {
  return await axios.get(`/api/admin/sales/yearlyLoss?year=${year}`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getNearExpiryProducts(auth: string) {
  return await axios.get("/api/user/products/nearExpiry", {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getLowStockProducts(quantity: number, auth: string) {
  return await axios.get(`/api/user/products/lowStock?qty=${quantity}`, {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

export async function getExpiredProducts(auth: string) {
  return await axios.get("/api/user/products/expiredProducts", {
    ...axiosRequestConfig,
    headers: {
      Authorization: auth,
    },
  });
}

// ######################## Invoice ########################

export async function addInvoice(formData: TInvoice, auth: string) {
  return await axios.post(
    "/api/user/invoice/addInvoice",
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
